let state = {
    isShifted: false,
    isOn: true,
    selectedOperation: null,
    history: []
};

const toggleShift = () => {
    state.isShifted = !state.isShifted;
}
const togglePower = () => {
    state.isOn = !state.isOn;
    if (!state.isOn) {
        state.isShifted = false;
        state.selectedOperation = null;
        clearHistory();
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