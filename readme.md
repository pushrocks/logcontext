# logcontext

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
  sgLogger.log('some message');
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
