[![Build Status](https://travis-ci.org/rousan/read-all.svg?branch=develop)](https://travis-ci.org/rousan/read-all)
[![NPM version](https://img.shields.io/npm/v/node-read-all.svg)](https://www.npmjs.com/package/node-read-all)
[![NPM total downloads](https://img.shields.io/npm/dt/node-read-all.svg)](https://www.npmjs.com/package/node-read-all)
[![Contributors](https://img.shields.io/github/contributors/rousan/read-all.svg)](https://github.com/rousan/read-all/graphs/contributors)
[![License](https://img.shields.io/github/license/rousan/read-all.svg)](https://github.com/rousan/read-all/blob/master/LICENSE)

# sl

A tiny and useful tool to list all `npm` scripts from `package.json` file.

> sl = script list

## Requirements

`node` >= `v4.0.0`

**Note**: If `node` and `npm` are not installed, Install them from [here](https://nodejs.org/en/download/).

## Installation

Install it from `npm`:

```bash
$ npm install -g read-all
```

## Usage

Access it from terminal or command prompt by `sl` command.

```bash
$ sl

   MyAwesomeProject
    - build           : babel src -d lib
    - start           : node node_modules/react-native/local-cli/cli.js start
    - test            : jest --coverage --verbose

```

### Script List for Multiple Projects

```bash
$ sl MyAwesomeProject MyAwesomeProject2

   MyAwesomeProject
    - build           : babel src -d lib
    - start           : node node_modules/react-native/local-cli/cli.js start
    - test            : jest --coverage --verbose


   MyAwesomeProject2
    - ng        : ng
    - test:e2e  : ng e2e
    - test:unit : ng test
    - test      : ng e2e && ng test

```

### Use Globbing

```bash
$ sl **/*

   MyProject1
    - build           : babel src -d lib
    - start           : node node_modules/react-native/local-cli/cli.js start
    - test            : jest --coverage --verbose


   MyProject2
    - ng        : ng
    - test:e2e  : ng e2e
    - test:unit : ng test
    - test      : ng e2e && ng test


   MyProject3
    - build : babel src -d lib
    - start : node src/cli.js
    - test  : mocha test

```

**Note**: It has built-in support for path `globbing` on `windows`.

## Contributing

Your PRs and stars are always welcome.

Checkout the [CONTRIBUTING](https://github.com/rousan/sl/blob/master/CONTRIBUTING.md) guides.