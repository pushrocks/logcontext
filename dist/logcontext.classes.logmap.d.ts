import * as plugins from './logcontext.plugins';
import { Namespace } from 'smartcls';
export declare class LogMap {
    clsNamespace: Namespace;
    paramMap: plugins.lik.Stringmap;
    constructor(clsNamespaceArg: Namespace);
    addData(paramName: string, logData: any): void;
    deleteData(paramName: string): void;
    getData(paramName: string): any;
    getAllData(): {};
}
