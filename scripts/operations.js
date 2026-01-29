class Operations {
  constructor(face,shift, functionality) {
    this.face = face;
    this.functionality = functionality;
    this.shift = shift || false;
  }
  execute(...args) {
    if (typeof this.functionality === "function") {
      return this.functionality(...args);
    }
  }
}

const addOperation = new Operations("+", false, (x, y) => x + y);
const subtractOperation = new Operations("-", false, (x, y) => x - y);
const multiplyOperation = new Operations("*", false, (x, y) => x * y);
const divideOperation = new Operations("/", false, (x, y) => {
  if (y === 0) return "Error: Division by zero";
  return x / y;
});
const squareOperation = new Operations("^2", false, (n) => n * n);
const factorialOperation = new Operations("!", true, (n) => {
  if (n < 0) return "Error: Negative number";
  if (n === 0 || n === 1) return 1;

  let rezultat = 1;
  for (let i = 1; i <= n; i++) {
    rezultat *= i;
  }

  return rezultat;
});
const cubeOperation = new Operations("^3", true, (n) => n * n * n);
const LogOperation = new Operations("log",true, (x, y) => {
    if (y <= 0) 
        return "Error: Argument (y) must be greater than 0";
    if (x <= 0) 
        return "Error: Base (x) must be greater than 0";
    if (x === 1) 
        return "Error: Base (x) cannot be 1 (division by zero)";
  return Math.log(y) / Math.log(x);
});
const squareRootOperation = new Operations("√", true, (n) => {
  if (n < 0) 
    return Math.sqrt(-n) + "i";
  return Math.sqrt(n);
});
const cubeRootOperation = new Operations("∛", true, (n) => {
  return Math.cbrt(n);
});

const defaultOperations = [addOperation, subtractOperation, multiplyOperation, divideOperation,squareOperation];
const shiftedOperations = [factorialOperation, cubeOperation, LogOperation, squareRootOperation, cubeRootOperation];

const operationList = {
  default: defaultOperations,
  shifted: shiftedOperations,
};

export default operationList ;
