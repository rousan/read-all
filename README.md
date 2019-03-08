[![Build Status](https://travis-ci.org/rousan/read-all.svg?branch=develop)](https://travis-ci.org/rousan/read-all)
[![codecov](https://codecov.io/gh/rousan/read-all/branch/develop/graph/badge.svg)](https://codecov.io/gh/rousan/read-all)
[![NPM version](https://img.shields.io/npm/v/node-read-all.svg)](https://www.npmjs.com/package/node-read-all)
[![NPM total downloads](https://img.shields.io/npm/dt/node-read-all.svg)](https://www.npmjs.com/package/node-read-all)
[![Contributors](https://img.shields.io/github/contributors/rousan/read-all.svg)](https://github.com/rousan/read-all/graphs/contributors)
[![License](https://img.shields.io/github/license/rousan/read-all.svg)](https://github.com/rousan/read-all/blob/master/LICENSE)

# read-all

Read all data from a Readable stream and get notified when Promise is resolved.

## Installation

Using npm:

```bash
$ npm install node-read-all
```

Using yarn:

```bash
$ yarn add node-read-all
```

## Usage

```javascript
const fs = require("fs");
const readAll = require("node-read-all");

const rStream = fs.createReadStream("file.txt");
rStream.setEncoding("utf8");
readAll(rStream)
  .then(data => console.log(data))
  .catch(console.error.bind(console));
```

When stream is in object mode:

```javascript
const readAll = require("node-read-all");

const transformStream = new Transform({
      readableObjectMode: true,
      transform(chunk, encoding, callback) {
        this.push({ value: chunk.toString() });
        callback();
      },
    });

readAll(rStream)
  .then(data => console.log(data))
  .catch(console.error.bind(console));

setTimeout(() => {
    transformStream.write('a');
    transformStream.write('b');
    transformStream.write('c');
    transformStream.end();
}, 1000);

```

## Contributing

Your PRs and stars are always welcome.