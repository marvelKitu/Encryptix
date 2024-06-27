let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('displayInput').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('displayInput').value = displayValue;
}

function calculate() {
    try {
        let result = eval(displayValue);
        displayValue = result.toString();
        document.getElementById('displayInput').value = displayValue;
    } catch(error) {
        displayValue = 'Error';
        document.getElementById('displayInput').value = displayValue;
    }
}
