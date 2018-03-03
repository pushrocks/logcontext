import * as plugins from './logcontext.plugins';

import { Namespace } from 'smartcls';
import { Stringmap } from 'lik';

export class LogMap {
  clsNamespace: Namespace;
  paramMap = new plugins.lik.Stringmap();

  constructor(clsNamespaceArg: Namespace) {
    this.clsNamespace = clsNamespaceArg;
  }

  addData(paramName: string, logData) {
    this.paramMap.addString(paramName);
    this.clsNamespace.set(paramName, logData);
  }

  deleteData(paramName: string) {
    this.clsNamespace.set(paramName, null);
  }

  getData(paramName: string) {
    return this.clsNamespace.get(paramName);
  }

  getAllData() {
    let returnObject = {};
    for (let stringArg of this.paramMap.getStringArray()) {
      returnObject[stringArg] = this.clsNamespace.get(stringArg);
    }
    return returnObject;
  }
}
