let state = {
    isShifted: false,
    historyVisible: false,
    isOn: true,
    selectedOperation: null,
    history: [],
    searchInput: ''
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
        state.historyVisible = false;
        setSelectedOperation(null);
        setSearchInput('');
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
const toggleHistoryVisibility = () => {
    if (!state.isOn) return; 
    state.historyVisible = !state.historyVisible;
}
const setSearchInput = (input) => {
    state.searchInput = input;
}

export { state, toggleShift, togglePower, setSelectedOperation, clearHistory, addToHistory, toggleHistoryVisibility, setSearchInput };