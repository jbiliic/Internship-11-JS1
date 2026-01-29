import operationList from './operations.js';
import { state,setSelectedOperation } from './stateManager.js';
import { calculate } from './functionality.js';

const render = (state) => {
    const main = document.querySelector('main');
    main.innerHTML = '';
    
    const calculator = document.createElement('div');
    calculator.className = 'calculator';

    const ioArea = createIOArea();
    calculator.appendChild(ioArea);

    const operationButtons = createOperationButtons(state);
    calculator.appendChild(operationButtons);

    const constantButtons = createConstantButtons();
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
const createOperationButtons = (state) => {
    const defaultOps = operationList.default;;
    const shiftedOps = operationList.shifted;

    defaultOps.forEach(op => {
        const button = document.createElement('button');
        button.className = 'non-shift-button';
        button.classList.add('operation-button');
        button.textContent = op.face;
    
        button.addEventListener('click', () => {
            setSelectedOperation(op);
            button.classList.add('selected');
            calculator.querySelectorAll('.operation-button').forEach(btn => btn.classList.remove('selected'));
        });
    });

    shiftedOps.forEach(op => {
        const button = document.createElement('button');
        button.className = 'shift-button';
        button.classList.add('operation-button');
        button.textContent = op.face;
        button.addEventListener('click', () => {
            setSelectedOperation(op);
            button.classList.add('selected');
            calculator.querySelectorAll('.operation-button').forEach(btn => btn.classList.remove('selected'));
        });
    });
    
    const container = document.createElement('div');
    container.className = 'operation-buttons-container';

    const allOps = [...operationList.default, ...operationList.shifted];

    allOps.forEach(op => {
        const button = document.createElement('button');
        button.className = op.shift ? 'operation-button shift-button' : 'operation-button non-shift-button';
        
        if (op.shift && !state.isShifted) button.classList.add('hidden');
        if (!op.shift && state.isShifted) button.classList.add('hidden');

        button.textContent = op.face;
        
        button.addEventListener('click', () => {
            document.querySelectorAll('.operation-button').forEach(btn => btn.classList.remove('selected'));
            setSelectedOperation(op);
            button.classList.add('selected');
        });

        container.appendChild(button);
    });
    return container; 
}
const createConstantButtons = () => {
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
        toggleShift();
    });

    const powerButton = document.createElement('button');
    powerButton.id = 'power-button';
    powerButton.textContent = 'On/Off';
    powerButton.addEventListener('click', () => {
        togglePower();
    });
    const constantButtonsDiv = document.createElement('div');
    constantButtonsDiv.className = 'constant-buttons';
    constantButtonsDiv.appendChild(calculateButton);
    constantButtonsDiv.appendChild(shiftButton);
    constantButtonsDiv.appendChild(powerButton);
    return constantButtonsDiv;
}
export { render };