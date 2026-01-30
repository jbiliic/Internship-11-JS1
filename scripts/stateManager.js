let state = {
    isShifted: false,
    isOn: true,
    selectedOperation: null,
    history: []
};

const toggleShift = () => {
    if (!state.isOn) return; 
    state.isShifted = !state.isShifted;
    setSelectedOperation(null);
}
const togglePower = () => {
    state.isOn = !state.isOn;
    if (!state.isOn) {
        state.isShifted = false;
        setSelectedOperation(null);
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