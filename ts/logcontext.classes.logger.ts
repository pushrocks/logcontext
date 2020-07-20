import * as plugins from './logcontext.plugins';
import { LogMap } from './logcontext.classes.logmap';

export class Logger {
  namespaceString: string;
  smartcls: plugins.smartcls.SmartCls;
  logmap: LogMap;
  thirdPartyLogger: any;
  child: any;
  settings = {
    enableScope: () => {
      this.settingsParams.scope = true;
    },
    disableScope: () => {
      this.settingsParams.scope = false;
    },
    enableAddData: () => {
      this.settingsParams.addData = true;
    },
    disableAddData: () => {
      this.settingsParams.addData = false;
    },
  };
  private settingsParams: { scope: boolean; addData: boolean } = {
    scope: true,
    addData: true,
  };

  constructor(namespaceArg: string = plugins.smartunique.shortId()) {
    this.namespaceString = namespaceArg;
    this.smartcls = new plugins.smartcls.SmartCls();
    this.logmap = new LogMap(this.smartcls);
  }

  addData(paramNameArg: string, dataArg: any) {
    if (this.settingsParams.addData) {
      this.logmap.addData(paramNameArg, dataArg);
    }
  }

  addThirdPartyLogger(thirdPartyLoggerArg) {
    this.thirdPartyLogger = thirdPartyLoggerArg;
  }

  /**
   * debug
   * @param logMessageArg
   */
  debug(logMessageArg) {
    this.routeLog('debug', logMessageArg);
  }

  /**
   * log
   * @param logMessageArg
   */
  log(logMessageArg) {
    this.routeLog('log', logMessageArg);
  }

  /**
   * info
   * @param logObjectArg
   */
  info(logObjectArg) {
    this.routeLog('info', logObjectArg);
  }

  /**
   * error
   * @param logMessageArg
   * @param args
   */
  error(logMessageArg, ...args) {
    this.routeLog('error', logMessageArg, ...args);
  }

  /**
   * warn
   * @param logMessageArg
   * @param args
   */
  warn(logMessageArg, ...args) {
    this.routeLog('warn', logMessageArg, ...args);
  }

  /**
   * fatal
   * @param logMessageArg
   * @param args
   */
  fatal(logMessageArg, ...args) {
    this.routeLog('fatal', logMessageArg, ...args);
  }

  // creates a new async scope
  scope(funcArg: any) {
    // create node continuation scope
    if (this.settingsParams.scope) {
      this.smartcls.run(funcArg);
    } else {
      funcArg();
    }
  }

  /**
   * routes the log according to whats available in the environment
   * @param {string} logMethod
   * @param {any} message
   * @param {any[]} ...args
   */
  private routeLog(logMethod, message, ...args) {
    const logObject = {
      message: message,
      type: logMethod,
      logContext: this.logmap.getAllData(),
    };
    if (this.thirdPartyLogger && this.thirdPartyLogger[logMethod]) {
      this.thirdPartyLogger[logMethod](logObject, ...args);
    } else {
      console.log(logObject);
    }
  }
}
