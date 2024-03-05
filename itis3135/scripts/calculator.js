let result = '';

function showNum(num) {
    result += num;
    updateDisplay(result);
}


function clear() {
    result = '';
    updateDisplay('');
}

function updateDisplay(value) {
    document.getElementById('result').value = value;
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