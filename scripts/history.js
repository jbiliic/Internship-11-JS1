class History {
    constructor(operation,res,arg1,arg2 = null) {
        this.operation = operation;
        this.res = res;
        this.arg1 = arg1;
        this.arg2 = arg2;
    }
    validate() {
        const resStr = String(this.res);
        if (resStr === "Error" || resStr.startsWith("Error")) {
            return false;
        }
        return true;
    }
}
export { History};