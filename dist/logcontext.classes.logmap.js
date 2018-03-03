"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./logcontext.plugins");
class LogMap {
    constructor(clsNamespaceArg) {
        this.paramMap = new plugins.lik.Stringmap();
        this.clsNamespace = clsNamespaceArg;
    }
    addData(paramName, logData) {
        this.paramMap.addString(paramName);
        this.clsNamespace.set(paramName, logData);
    }
    deleteData(paramName) {
        this.clsNamespace.set(paramName, null);
    }
    getData(paramName) {
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
exports.LogMap = LogMap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nY29udGV4dC5jbGFzc2VzLmxvZ21hcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL2xvZ2NvbnRleHQuY2xhc3Nlcy5sb2dtYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnREFBZ0Q7QUFLaEQ7SUFJRSxZQUFZLGVBQTBCO1FBRnRDLGFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7UUFHckMsSUFBSSxDQUFDLFlBQVksR0FBRyxlQUFlLENBQUM7SUFDdEMsQ0FBQztJQUVELE9BQU8sQ0FBQyxTQUFpQixFQUFFLE9BQU87UUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxVQUFVLENBQUMsU0FBaUI7UUFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxPQUFPLENBQUMsU0FBaUI7UUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxVQUFVO1FBQ1IsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLEdBQUcsQ0FBQyxDQUFDLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3JELFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM3RCxDQUFDO1FBQ0QsTUFBTSxDQUFDLFlBQVksQ0FBQztJQUN0QixDQUFDO0NBQ0Y7QUE1QkQsd0JBNEJDIn0=