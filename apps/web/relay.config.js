module.exports = {
  src: './',
  schema: './shared/relay/relay-schema.graphql',
  exclude: ['**/node_modules/**', '**/__mocks__/**', '**/__generated__/**'],
  language: 'typescript',
  artifactDirectory: 'shared/relay/__generated__',
};
