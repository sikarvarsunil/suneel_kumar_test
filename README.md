## The node.js example app

Given an array of clicks, return the subset of clicks where:
1. For each IP within each one hour period, only the most expensive click is placed into the
result set.
2. If more than one click from the same IP ties for the most expensive click in a one hour
period, only place the earliest click into the result set.
3. If there are more than 10 clicks for an IP in the overall array of clicks, do not include any
of those clicks in the result set.
The result set should be stored in an array of hashes. Each hash should represent a click. The
expected result set should be a subset of the original array.

## Requirements

* Node 8
* Git

Used FS Node Package to generate result json file.
# File System

<!--introduced_in=v0.0.1-security-->

<!--name=fs-->

The `fs` module provides an API for interacting with the file system in a
manner closely modeled around standard POSIX functions.

To use this module:

```js
const fs = require('fs');
```

All file system operations have synchronous and asynchronous forms.

The asynchronous form always takes a completion callback as its last argument.
The arguments passed to the completion callback depend on the method, but the
first argument is always reserved for an exception. If the operation was
completed successfully, then the first argument will be `null` or `undefined`.

```js
fs.writeFile('message.txt', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
```
## Common setup
Clone the repo and install the dependencies.

```bash
git clone
```

```bash
npm install
```

## Steps for  access

```bash
npm run solution
```
1. input source file- src/click.json
2. ouput source file - dist/resultset.json (please remove this file only before run this command)

when the run this command, it is executed resultset.json file in the dist folder. A json file with the result set produced by your solution

```bash
npm run test
```
A thorough suite of tests that will run when the command is executed