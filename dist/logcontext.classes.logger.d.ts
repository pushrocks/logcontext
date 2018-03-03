import * as plugins from './logcontext.plugins';
import { LogMap } from './logcontext.classes.logmap';
export declare class Logger {
    namespaceString: string;
    clsNameSpace: plugins.smartcls.Namespace;
    logmap: LogMap;
    thirdPartyLogger: any;
    child: any;
    settings: {
        enableScope: () => void;
        disableScope: () => void;
        enableAddData: () => void;
        disableAddData: () => void;
    };
    private settingsParams;
    constructor(namespaceArg?: string);
    addData(paramNameArg: string, dataArg: any): void;
    addThirdPartyLogger(thirdPartyLoggerArg: any): void;
    /**
     * debug
     * @param logMessageArg
     */
    debug(logMessageArg: any): void;
    /**
     * log
     * @param logMessageArg
     */
    log(logMessageArg: any): void;
    /**
     * info
     * @param logObjectArg
     */
    info(logObjectArg: any): void;
    /**
     * error
     * @param logMessageArg
     * @param args
     */
    error(logMessageArg: any, ...args: any[]): void;
    /**
     * warn
     * @param logMessageArg
     * @param args
     */
    warn(logMessageArg: any, ...args: any[]): void;
    /**
     * fatal
     * @param logMessageArg
     * @param args
     */
    fatal(logMessageArg: any, ...args: any[]): void;
    scope(funcArg: any): void;
    /**
     * routes the log according to whats available in the environment
     * @param {string} logMethod
     * @param {any} message
     * @param {any[]} ...args
     */
    private routeLog(logMethod, message, ...args);
}
