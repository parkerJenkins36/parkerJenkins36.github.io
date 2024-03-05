let result = '';

function showNum(num) {
    result += num;
    updateDisplay(result);
}
function clearDisplay() {
    result = '';
    updateDisplay(0);
}
function updateDisplay(value) {
    document.getElementById('result').textContent = value;
}
function addOperator(op) {
    result += op;
    updateDisplay(result);
}

function calculate() {
    try {
        const display = eval(result);
        updateDisplay(display);
        result = display;
    } catch (error) {
        updateDisplay('Error');
    }
}