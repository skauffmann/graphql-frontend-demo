/**
 * @generated SignedSource<<715cfaf9a99ff44a294b0f5ca19ce3b7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type BooksViewQuery$variables = Record<PropertyKey, never>;
export type BooksViewQuery$data = {
  readonly books: ReadonlyArray<{
    readonly author: {
      readonly booksCount: number;
      readonly id: string;
      readonly name: string;
    };
    readonly id: string;
    readonly summary: string;
    readonly title: string;
  }>;
};
export type BooksViewQuery = {
  response: BooksViewQuery$data;
  variables: BooksViewQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Book",
    "kind": "LinkedField",
    "name": "books",
    "plural": true,
    "selections": [
      (v0/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "summary",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Author",
        "kind": "LinkedField",
        "name": "author",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "booksCount",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "BooksViewQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "BooksViewQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "50f55529b6027f7053b8653e8af92155",
    "id": null,
    "metadata": {},
    "name": "BooksViewQuery",
    "operationKind": "query",
    "text": "query BooksViewQuery {\n  books {\n    id\n    title\n    summary\n    author {\n      id\n      name\n      booksCount\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "4ca98de4d973201fafb6ff69ffca1464";

export default node;
