"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./logcontext.plugins");
const logcontext_classes_logmap_1 = require("./logcontext.classes.logmap");
class Logger {
    constructor(namespaceArg = plugins.shortid()) {
        this.settings = {
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
            }
        };
        this.settingsParams = {
            scope: true,
            addData: true
        };
        this.namespaceString = namespaceArg;
        this.clsNameSpace = plugins.smartcls.createNamespace(this.namespaceString);
        this.logmap = new logcontext_classes_logmap_1.LogMap(this.clsNameSpace);
    }
    addData(paramNameArg, dataArg) {
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
    scope(funcArg) {
        // create node continuation scope
        if (this.settingsParams.scope) {
            this.clsNameSpace.run(funcArg);
        }
        else {
            funcArg();
        }
    }
    /**
     * routes the log according to whats available in the environment
     * @param {string} logMethod
     * @param {any} message
     * @param {any[]} ...args
     */
    routeLog(logMethod, message, ...args) {
        let logObject = {
            message: message,
            type: logMethod,
            logContext: this.logmap.getAllData()
        };
        if (this.thirdPartyLogger && this.thirdPartyLogger[logMethod]) {
            this.thirdPartyLogger[logMethod](logObject, ...args);
        }
        else {
            console.log(logObject);
        }
    }
}
exports.Logger = Logger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nY29udGV4dC5jbGFzc2VzLmxvZ2dlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL2xvZ2NvbnRleHQuY2xhc3Nlcy5sb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnREFBZ0Q7QUFDaEQsMkVBQXFEO0FBRXJEO0lBeUJFLFlBQVksZUFBdUIsT0FBTyxDQUFDLE9BQU8sRUFBRTtRQW5CcEQsYUFBUSxHQUFHO1lBQ1QsV0FBVyxFQUFFLEdBQUcsRUFBRTtnQkFDaEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ25DLENBQUM7WUFDRCxZQUFZLEVBQUUsR0FBRyxFQUFFO2dCQUNqQixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDcEMsQ0FBQztZQUNELGFBQWEsRUFBRSxHQUFHLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNyQyxDQUFDO1lBQ0QsY0FBYyxFQUFFLEdBQUcsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3RDLENBQUM7U0FDRixDQUFDO1FBQ00sbUJBQWMsR0FBeUM7WUFDN0QsS0FBSyxFQUFFLElBQUk7WUFDWCxPQUFPLEVBQUUsSUFBSTtTQUNkLENBQUM7UUFHQSxJQUFJLENBQUMsZUFBZSxHQUFHLFlBQVksQ0FBQztRQUNwQyxJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksa0NBQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELE9BQU8sQ0FBQyxZQUFvQixFQUFFLE9BQVk7UUFDeEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FB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