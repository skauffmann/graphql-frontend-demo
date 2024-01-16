/* eslint-disable @typescript-eslint/no-var-requires */
const axios = require('axios');
const fs = require('fs');

const appBackendUrl = 'http://localhost:4000';

const sleep = (seconds) =>
  new Promise((resolve) => setTimeout(resolve, seconds / 1000));

const isServerStarted = async () => {
  try {
    await axios({
      method: 'get',
      url: `${appBackendUrl}/?query=%7B__typename%7D`,
      headers: { 'Content-Type': 'application/json' },
    });
    return true;
  } catch (err) {
    if (err.name !== 'Error') throw err;
  }

  return false;
};

const generatePossibleTypes = async () => {
  while (!(await isServerStarted())) {
    await sleep(0.25);
  }

  const data = await axios({
    method: 'post',
    url: appBackendUrl,
    data: {
      query: `
      {
        __schema {
          types {
            kind
            name
            possibleTypes {
              name
            }
          }
        }
      }
    `,
      variables: {},
    },
    headers: { 'Content-Type': 'application/json' },
  }).catch((err) => console.error(err.response.data.errors));

  const possibleTypes = {};
  if (data && data.data) {
    data.data.data.__schema.types.forEach((supertype) => {
      if (supertype.possibleTypes) {
        possibleTypes[supertype.name] = supertype.possibleTypes.map(
          (subtype) => subtype.name
        );
      }
    });
  }

  await fs.writeFileSync(
    './shared/apollo/possible-types.json',
    JSON.stringify(possibleTypes)
  );
};

generatePossibleTypes();
