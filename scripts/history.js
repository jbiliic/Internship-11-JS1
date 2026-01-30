class History {
    constructor(operation,res,arg1,arg2 = null) {
        this.operation = operation;
        this.res = res;
        this.arg1 = arg1;
        this.arg2 = arg2;
    }
    validate() {
        if (this.res === "Error" || this.res.startsWith("Error")) {
            return false;
        }
        return true;
    }
}
export { History};