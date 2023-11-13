let expression = '';

function appendNumber(number) {
 expression += number;
 document.getElementById('result').value = expression;
}

function appendOperator(operator) {
 expression += operator;
 document.getElementById('result').value = expression;
}

function calculate() {
 try {}
}