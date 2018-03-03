import { expect, tap } from 'tapbundle';
import * as logcontext from '../ts/index';
import * as smartdelay from 'smartdelay';

let testLogger = new logcontext.Logger('testNamespace');

tap.test('should log for .error()', async () => {
  testLogger.error(new Error('first error message'));
});

tap.test('should log for .fatal()', async () => {
  testLogger.fatal('this is fatal');
});

// set up independent log context
tap.testParallel('should create an async LogContext', async tools => {
  testLogger.scope(async () => {
    testLogger.logmap.addData('id1', {
      someData: 'someValue'
    });
    await tools.delayFor(10).then(async () => {
      testLogger.log('hi');
      testLogger.error(new Error('custom error message'));
    });
  });
});

tap.testParallel('should create a new scope', async () => {
  testLogger.scope(async () => {
    testLogger.logmap.addData('id1', {
      someData: 'otherValue'
    });
    testLogger.info('anything');
  });
});

tap.test('should log within default scope', async tools => {
  await tools.delayFor(3000);
  testLogger.log('message without context');
});

tap.test('should not expose memory leak', async tools => {
  await tools.checkIterationLeak(async () => {
    testLogger.scope(() => {
      testLogger.addData(
        'someid',
        'wow this is an awesome string with a lot of text, so increases actually matter'
      );
      testLogger.log('hi');
    });
  });
});

tap.start();
