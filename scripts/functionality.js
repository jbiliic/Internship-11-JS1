import { History } from './history.js';
const calculate = (state) => {
    const val1 = document.getElementById('num1').value;
    const val2 = document.getElementById('num2').value;
    const res = state.selectedOperation.execute(val1, val2);
    const instance = new History(state.selectedOperation, res, val1, val2);
    return instance;
}
export { calculate };