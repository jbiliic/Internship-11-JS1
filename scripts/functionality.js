const calculate = (state) => {
    const val1 = document.getElementById('num1').value;
    const val2 = document.getElementById('num2').value;
    return state.selectedOperation.execute(val1, val2);
}
export { calculate };