# [frank.gairal.rocks](https://frank.gairal.rocks) RESTful API ![CI status](https://github.com/gairal/frank-bo-node/actions/workflows/ci.yml/badge.svg)

> A REST API built with [TypeScript](https://www.typescriptlang.org/), [Koa](https://koajs.com/),
> [Vitest](https://vitest.dev), [bun](https://bun.sh/), [biome](https://biomejs.dev/) and ❤️

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
bun i

# start the ts-node-dev process
bun start

# access the API on http://localhost:8000
```

## Commands

- `bun run build`: builds the app for production
- `bun dev`: launches a ts-node-dev watcher
- `bun lint`: lints the whole sources and tests with eslint
- `bun start`: runs the project in production mode
- `bun test-cov`: runs vitest tests with coverage
- `bun run test`: runs vitest tests

## To-do

- [ ] add lru-cache + reset endpoint?
