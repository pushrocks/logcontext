import * as plugins from './logcontext.plugins';

export class LogMap {
  smartcls: plugins.smartcls.SmartCls;
  paramMap = new plugins.lik.Stringmap();

  constructor(clsNamespaceArg: plugins.smartcls.SmartCls) {
    this.smartcls = clsNamespaceArg;
  }

  addData(paramName: string, logData) {
    this.paramMap.addString(paramName);
    this.smartcls.set(paramName, logData);
  }

  deleteData(paramName: string) {
    this.smartcls.set(paramName, null);
  }

  getData(paramName: string) {
    return this.smartcls.get(paramName);
  }

  getAllData() {
    const returnObject = {};
    for (const stringArg of this.paramMap.getStringArray()) {
      returnObject[stringArg] = this.smartcls.get(stringArg);
    }
    return returnObject;
  }
}
