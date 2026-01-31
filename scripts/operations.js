class Operations {
  constructor(face,name,shift, requires2,functionality) {
    this.face = face;
    this.name = name;
    this.functionality = functionality;
    this.shift = shift || false;
    this.requires2 = requires2 || false;
  }

  execute(arg1, arg2) {
    if (typeof this.functionality !== "function") return "Error";

    const val1 = parseFloat(arg1);
    const val2 = parseFloat(arg2);

    if (this.requires2 && isNaN(val2)) {
      return "Error: Missing 2nd number";
    }
    return this.requires2 
      ? this.functionality(val1, val2) 
      : this.functionality(val1);
  }
}

const addOperation = new Operations("+", 'Addition',false, true, (x, y) => x + y);
const subtractOperation = new Operations("-", 'Subtraction', false, true, (x, y) => x - y);
const multiplyOperation = new Operations("*", 'Multiplication', false, true, (x, y) => x * y);
const divideOperation = new Operations("/", 'Division', false, true, (x, y) => {
  if (y === 0) return "Error: Division by zero";
  return x / y;
});
const squareOperation = new Operations("^2", 'Square', false, false, (n) => n * n);
const factorialOperation = new Operations("!", 'Factorial', true, false, (n) => {
  if (n < 0) return "Error: Negative number";
  if (n === 0 || n === 1) return 1;

  let rezultat = 1;
  for (let i = 1; i <= n; i++) {
    rezultat *= i;
  }

  return rezultat;
});
const cubeOperation = new Operations("^3", 'Cube', true, false, (n) => n * n * n);
const LogOperation = new Operations("log", 'Logarithm', true, true, (x, y) => {
    if (y <= 0) 
        return "Error: Argument (y) must be greater than 0";
    if (x <= 0) 
        return "Error: Base (x) must be greater than 0";
    if (x === 1) 
        return "Error: Base (x) cannot be 1 (division by zero)";
  return Math.log(y) / Math.log(x);
});
const squareRootOperation = new Operations("√", 'Square Root', true, false, (n) => {
  if (n < 0) 
    return Math.sqrt(-n) + "i";
  return Math.sqrt(n);
});
const cubeRootOperation = new Operations("∛", 'Cube Root', true, false, (n) => {
  return Math.cbrt(n);
});

const defaultOperations = [addOperation, subtractOperation, multiplyOperation, divideOperation,squareOperation];
const shiftedOperations = [factorialOperation, cubeOperation, LogOperation, squareRootOperation, cubeRootOperation];
const operationList = {
  default: defaultOperations,
  shifted: shiftedOperations,
};
export default operationList ;
