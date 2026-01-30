import operationList from './operations.js';
import { state,setSelectedOperation,togglePower,toggleShift } from './stateManager.js';
import { calculate } from './functionality.js';

const render = (state) => {
    const main = document.querySelector('main');
    main.innerHTML = '';
    const calculator = document.createElement('div');
    calculator.className = 'calculator';

    const ioArea = createIOArea();
    calculator.appendChild(ioArea);

    const operationButtons = createOperationButtons(state, operationList);
    calculator.appendChild(operationButtons);

    const constantButtons = createConstantButtons(state);
    calculator.appendChild(constantButtons);

    main.appendChild(calculator);

}
const createIOArea = () => {
    const ioArea = document.createElement('div');
    ioArea.className = 'io-area';
    const input1 = document.createElement('input');
    input1.type = 'number';
    input1.className = 'input-field';
    input1.id = 'num1';

    const input2 = document.createElement('input');
    input2.type = 'number';
    input2.className = 'input-field';
    input2.id = 'num2';

    const output = document.createElement('div');
    output.className = 'output-field';
    ioArea.appendChild(input1);
    ioArea.appendChild(input2);
    ioArea.appendChild(output);
    return ioArea;
}
const createOperationButtons = (state,operationList) => {
    const container = document.createElement('div');
    const currentButtons = state.isShifted ? operationList.shifted : operationList.default;
    currentButtons.forEach(op => {
        const button = document.createElement('button');
        button.className = `operation-button ${state.isShifted ? 'on-shift-button' : 'non-shift-button'}`;
        button.textContent = op.face;
        button.addEventListener('click', () => {
            if (!state.isOn) return;
            setSelectedOperation(op);
            document.querySelectorAll('.operation-button').forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
        });
        container.appendChild(button);
    });
    container.className = 'operation-buttons-container';
    return container; 
}
const createConstantButtons = (state) => {
    const calculateButton = document.createElement('button');
    calculateButton.id = 'calculate-button';
    calculateButton.textContent = '=';
    calculateButton.addEventListener('click', () => {
        const res = calculate(state);
        const output = document.querySelector('.output-field');
        output.innerHTML = res;
    });

    const shiftButton = document.createElement('button');
    shiftButton.id = 'shift-button';
    shiftButton.textContent = 'Shift';
    shiftButton.addEventListener('click', () => {
        if (!state.isOn) return;

        toggleShift();
        render(state);
    });

    const powerButton = document.createElement('button');
    powerButton.id = 'power-button';
    powerButton.textContent = 'On/Off';
    powerButton.addEventListener('click', () => {
        togglePower();
        render(state);
    });
    const constantButtonsDiv = document.createElement('div');
    constantButtonsDiv.className = 'constant-buttons';
    constantButtonsDiv.appendChild(calculateButton);
    constantButtonsDiv.appendChild(shiftButton);
    constantButtonsDiv.appendChild(powerButton);
    return constantButtonsDiv;
}
export { render };