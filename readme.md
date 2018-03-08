# logcontext
enrich logs with context

## Availabililty
[![npm](https://pushrocks.gitlab.io/assets/repo-button-npm.svg)](https://www.npmjs.com/package/logcontext)
[![git](https://pushrocks.gitlab.io/assets/repo-button-git.svg)](https://GitLab.com/pushrocks/logcontext)
[![git](https://pushrocks.gitlab.io/assets/repo-button-mirror.svg)](https://github.com/pushrocks/logcontext)
[![docs](https://pushrocks.gitlab.io/assets/repo-button-docs.svg)](https://pushrocks.gitlab.io/logcontext/)

## Status for master
[![build status](https://GitLab.com/pushrocks/logcontext/badges/master/build.svg)](https://GitLab.com/pushrocks/logcontext/commits/master)
[![coverage report](https://GitLab.com/pushrocks/logcontext/badges/master/coverage.svg)](https://GitLab.com/pushrocks/logcontext/commits/master)
[![npm downloads per month](https://img.shields.io/npm/dm/logcontext.svg)](https://www.npmjs.com/package/logcontext)
[![Dependency Status](https://david-dm.org/pushrocks/logcontext.svg)](https://david-dm.org/pushrocks/logcontext)
[![bitHound Dependencies](https://www.bithound.io/github/pushrocks/logcontext/badges/dependencies.svg)](https://www.bithound.io/github/pushrocks/logcontext/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/pushrocks/logcontext/badges/code.svg)](https://www.bithound.io/github/pushrocks/logcontext)
[![Known Vulnerabilities](https://snyk.io/test/npm/logcontext/badge.svg)](https://snyk.io/test/npm/logcontext)
[![TypeScript](https://img.shields.io/badge/TypeScript-2.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%206.x.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Usage
Use TypeScript for best in class instellisense.

the logconext module exposes an easy to use syntax for nodejs style async logcontexts.

```typescript
let testLogger = new logcontext.Logger('testNamespace');

testLogger.scope(async () => {
  testLogger.addData('id1', {
    someData: 'someValue'
  });
  testLogger.log('hi');
  testLogger.error(new Error('custom error message'));
  setTimeout(() => {
    outsideFunction(); // log scope will travel through callbacks and promises
  }, 2000);
});

let outsideFunction = () => {
  // Note:
  // the below testLogger reference will have different contexts
  // depending from which scope "outsideFunction" was called".
  testLogger.log('some message');
};
```

## class Logger

```typescript
import { Logger } from 'logcontext';

// instantiate new Logger
// argument optional, if left empty auto generated shortid will be used
let myLogger = new Logger('myNamespace');

// create a scope
myLogger.scope(async () => {
  // everything that is appended to the call stack from inside here will have all appended context data available

  // add some scoped context information
  myLogger.addData('customerId', '12345678');

  // will log something with priviously appended context of this scope in place
  myLoger.log('awesomeText');
});
```

For further information read the linked docs at the top of this README.

> MIT licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)
| By using this npm module you agree to our [privacy policy](https://lossless.gmbH/privacy.html)

[![repo-footer](https://pushrocks.gitlab.io/assets/repo-footer.svg)](https://push.rocks)
