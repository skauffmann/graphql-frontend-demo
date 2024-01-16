# GraphQL Frontend Demo

This project aims to explore different implementations of GraphQL on NextJS

## Quick start

```sh
yarn && yarn dev
```

Then visit <http://localhost:3000/>

## What's inside?

A very simple Apollo GraphQL server and a NextJS application :

### How to explore this repo

- `Fetch API`: A simple GraphQL query using the "standard" Fetch API (wrapped by NextJS, but it doesn't matter for the demo) - [apps/web/app/fetch/page.tsx](apps/web/app/fetch/page.tsx)
- `Apollo Graphql + Pages Router`:
  - Apollo Graphql with the NextJS Pages Router examples (query, mutation and subscription) on client side only - [apps/web/pages/pages-router/client-only.tsx](apps/web/pages/pages-router/client-only.tsx)
  - Apollo Graphql with the NextJS Pages Router examples (query, mutation and subscription) on client side only - [apps/web/pages/pages-router/ssr.tsx](apps/web/pages/pages-router/ssr.tsx)
- `Relay + App Router`: GraphQL query using Relay and NextJS App Router - [apps/web/app/relay/page.tsx](apps/web/app/relay/page.tsx)
- `Apollo Graphql + App Router`:
  - The experimental Apollo Graphql with the NextJS App Router examples (query, mutation and subscription) on client components - [apps/web/app/app-router/page.tsx](apps/web/app/app-router/page.tsx)
  - The experimental Apollo Graphql with the NextJS App Router examples (query, mutation and subscription) on React Server component - [apps/web/app/app-router/rsc/page.tsx](apps/web/app/app-router/rsc/page.tsx)

### Generated code

Some part of the frontend app is generated using GraphQL schema and frontend graphql (Relay) or gql (Apollo) template literal tags.
All theses commands are automaticaly started when running `yarn dev` on the root directory.

- `yarn generate:types`: Use graphql-codegen and parse gql template literal tags on the frontend to generate TS types
- `yarn generate:possible-types`: Generate Apollo Graphql possible types by introspection of the GraphQL schema
- `yarn relay:schema`: Generate the Graphql Schema for Relay using Apollo Rover cli
- `yarn relay:generate`: Generate queries and TS types for Relay using the relay-compiler cli
