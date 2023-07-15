let result = '0';
let operation = '0';
let maxLength = 24;
let ct = 0;

function selectNumber(value) {
    if (ct < maxLength) {
        if (value !== '0' && result[0] === '0') {
            result = value;
            operation = result;
        } else if (result[0] !== '0') {
            result += value;
            operation += value;
        } else if (operation[ct - 1] == '+' || operation[ct - 1] == '-' || operation[ct - 1] == '*' || operation[ct - 1] == '/'){
            result = '0';
            operation += value;
        }
        updateResult();
        ct++;
    } 
}

function clearResult() {
    result = '0';
    operation = result;
    updateResult();
}

function updateResult() {
    const resultElem = document.querySelector('.result');
    resultElem.textContent = result;
}

function selectMethod(method) {
    operation += ' ' + method + ' ';
    result = 'Insert Number';
    updateResult();
    result = '';
}


function calculateResult() {
    let finalResult = eval(operation);
    result = String(finalResult);
    updateResult();
    result = '0';
}
