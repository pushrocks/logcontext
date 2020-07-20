# @pushrocks/logcontext
enrich logs with context

## Availabililty and Links
* [npmjs.org (npm package)](https://www.npmjs.com/package/@pushrocks/logcontext)
* [gitlab.com (source)](https://gitlab.com/pushrocks/logcontext)
* [github.com (source mirror)](https://github.com/pushrocks/logcontext)
* [docs (typedoc)](https://pushrocks.gitlab.io/logcontext/)

## Status for master

Status Category | Status Badge
-- | --
GitLab Pipelines | [![pipeline status](https://gitlab.com/pushrocks/logcontext/badges/master/pipeline.svg)](https://lossless.cloud)
GitLab Pipline Test Coverage | [![coverage report](https://gitlab.com/pushrocks/logcontext/badges/master/coverage.svg)](https://lossless.cloud)
npm | [![npm downloads per month](https://badgen.net/npm/dy/@pushrocks/logcontext)](https://lossless.cloud)
Snyk | [![Known Vulnerabilities](https://badgen.net/snyk/pushrocks/logcontext)](https://lossless.cloud)
TypeScript Support | [![TypeScript](https://badgen.net/badge/TypeScript/>=%203.x/blue?icon=typescript)](https://lossless.cloud)
node Support | [![node](https://img.shields.io/badge/node->=%2010.x.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
Code Style | [![Code Style](https://badgen.net/badge/style/prettier/purple)](https://lossless.cloud)
PackagePhobia (total standalone install weight) | [![PackagePhobia](https://badgen.net/packagephobia/install/@pushrocks/logcontext)](https://lossless.cloud)
PackagePhobia (package size on registry) | [![PackagePhobia](https://badgen.net/packagephobia/publish/@pushrocks/logcontext)](https://lossless.cloud)
BundlePhobia (total size when bundled) | [![BundlePhobia](https://badgen.net/bundlephobia/minzip/@pushrocks/logcontext)](https://lossless.cloud)
Platform support | [![Supports Windows 10](https://badgen.net/badge/supports%20Windows%2010/yes/green?icon=windows)](https://lossless.cloud) [![Supports Mac OS X](https://badgen.net/badge/supports%20Mac%20OS%20X/yes/green?icon=apple)](https://lossless.cloud)

## Usage

Use TypeScript for best in class instellisense.

the logconext module exposes an easy to use syntax for nodejs style async logcontexts.

```typescript
let testLogger = new logcontext.Logger('testNamespace');

testLogger.scope(async () => {
  testLogger.addData('id1', {
    someData: 'someValue',
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

## Contribution

We are always happy for code contributions. If you are not the code contributing type that is ok. Still, maintaining Open Source repositories takes considerable time and thought. If you like the quality of what we do and our modules are useful to you we would appreciate a little monthly contribution: You can [contribute one time](https://lossless.link/contribute-onetime) or [contribute monthly](https://lossless.link/contribute). :)

For further information read the linked docs at the top of this readme.

> MIT licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)
| By using this npm module you agree to our [privacy policy](https://lossless.gmbH/privacy)

[![repo-footer](https://lossless.gitlab.io/publicrelations/repofooter.svg)](https://maintainedby.lossless.com)
