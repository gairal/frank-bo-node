# [frank.gairal.rocks](https://frank.gairal.rocks) RESTful API ![CI status](https://github.com/gairal/frank-bo-node/actions/workflows/ci.yml/badge.svg)

> A REST API built with [TypeScript](https://www.typescriptlang.org/), [Koa](https://koajs.com/),
> [Jest](https://jestjs.io/), [Prettier](https://prettier.io/), [eslint](https://eslint.org/) and ❤️

## TOC

- [Quick Start](#quick-start)
- [Commands](#commands)
- [To-do](#to-do)

## Quick Start

```bash
# clone the repo
git clone git@github.com:gairal/frank-bo-node.git

# enter the repo directory
cd frank-bo-node

# install the dependencies
yarn

# start the ts-node-dev process
yarn start

# access the API on http://localhost:8080
```

## Commands

- `yarn build`: builds the app for production
- `yarn dev`: launches a ts-node-dev watcher
- `yarn lint`: lints the whole sources and tests with eslint
- `yarn start`: runs the project in production mode
- `yarn test-cov`: runs Jest tests with coverage
- `yarn test`: runs Jest tests

## To-do

- [ ] add lru-cache + reset endpoint?
