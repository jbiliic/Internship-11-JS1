let state = {
    isShifted: false,
    isOn: true,
    selectedOperation: null,
    history: []
};

const toggleShift = () => {
    state.isShifted = !state.isShifted;
    if (!state.isShifted) {
        document.querySelectorAll('.shift-button').forEach(btn => btn.classList.add('hidden'));
        document.querySelectorAll('.non-shift-button').forEach(btn => btn.classList.remove('hidden'));
    }
    else {
        document.querySelectorAll('.shift-button').forEach(btn => btn.classList.remove('hidden'));
        document.querySelectorAll('.non-shift-button').forEach(btn => btn.classList.add('hidden'));
    }
    document.querySelectorAll('.operation-button').forEach(btn => btn.classList.remove('selected'));
    setSelectedOperation(null);
}
const togglePower = () => {
    state.isOn = !state.isOn;
    if (!state.isOn) {
        state.isShifted = false;
        state.selectedOperation = null;
        document.getElementById('calculator').classList.add('powered-off');
        clearHistory();
    }
    else {
        document.getElementById('calculator').classList.remove('powered-off');
    }
}
const setSelectedOperation = (operation) => {
    state.selectedOperation = operation;
}
const clearHistory = () => {
    state.history = [];
}
const addToHistory = (entry) => {
    state.history.push(entry);
}
export { state, toggleShift, togglePower, setSelectedOperation, clearHistory, addToHistory };