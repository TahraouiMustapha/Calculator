let firstNmb = '';
let operator = '';
let secondOperator = '';
let secondNmb = '';

let result = null;
let displayValue = '0';
let screen = document.querySelector('.screen');


document.addEventListener('DOMContentLoaded', () => {
    const numbers = document.querySelectorAll('.number');
    numbers.forEach((num) => {
        num.addEventListener('click', (e) => {
            handleNumbers(e.target.textContent);
            updateDisplay();
        })
    })

    const operators = document.querySelectorAll('.operator');
    operators.forEach((op) => {
        op.addEventListener('click', (e) => {
            handleOperators(e.target.innerText);
            updateDisplay();
        });
    });

    const equal = document.querySelector('.equal');
    equal.addEventListener('click', () => {
        handleEquals();
        updateDisplay();
    });

    const clear = document.querySelector('.clear');
    clear.addEventListener('click', () => {
        handleCLear();
        updateDisplay();
    })

    const dot = document.querySelector('.dot');
    dot.addEventListener('click', () => {
        inputDecimal();
        updateDisplay();
    });

    const backspace = document.querySelector('.backspace');
    backspace.addEventListener('click', () => {
        handleBackspace();
        updateDisplay();
    });
});

updateDisplay();

function updateDisplay() {
    screen.innerText = displayValue;
    if(displayValue.length > 9) {
        screen.innerText = displayValue.slice(0, 9);
    }
}

function handleNumbers (num) {
    if(operator === '') {
        if(displayValue === '0') {
            displayValue = num;
        } else if (displayValue === firstNmb) {
            displayValue = num;
        } else {
            displayValue += num;
        }
    } else {
        if(displayValue === firstNmb) displayValue = num;
        else displayValue += num;
    }
}

function handleEquals () {
   
    if(firstNmb === '') {
        displayValue = displayValue;
    } else if (secondOperator != '') {
        secondNmb = displayValue;
        result = operate(firstNmb, secondOperator, secondNmb);
        if (result != "error") {
            firstNmb = result;
            displayValue = roundNumber(result);
            secondNmb = '';
            operator = '';
            secondOperator = '';
            result = null;
        } else {
            displayValue = result;
        }

    } else {
        secondNmb = displayValue;
        result = operate( firstNmb, operator, secondNmb);
        if (result != "error") {
            firstNmb = result;
            displayValue =  roundNumber(result) ;
            result = null
            secondNmb = '';
            operator = '';
            secondOperator = '';
        } else {
            displayValue = result;
        }
    }
}


function handleOperators(op) {
    if (operator != '' && secondOperator === '') {
        secondOperator = op;
        secondNmb = displayValue;
        result = operate(firstNmb, operator, secondNmb);
        if(result != "error") {
            firstNmb = result;
            displayValue =   roundNumber(result) ;
            result = null;
        } else {
            displayValue = result;
        }

    } else if (operator != '' && secondOperator != '') {
        secondNmb = displayValue;
        result = operate(firstNmb, secondOperator, secondNmb);
        if(result != "error") {
            secondOperator = op;
            displayValue =   roundNumber(result) ;
            firstNmb = displayValue;
            result = null;
        } else {
            displayValue = result;
        }

    } else {
        operator = op;
        firstNmb = displayValue;
    }

}

function handleCLear() {
    displayValue = '0';
    firstNmb = '';
    secondNmb = '';
    operator = '';
    secondOperator = '';
    result = null;
}

function inputDecimal() {
    if (!displayValue.includes('.')) {
        displayValue += ".";
    }
}

function handleBackspace() {
    if(displayValue.length === 1 ) {
        displayValue = '0';
    } else if (displayValue != '0'){
        displayValue = displayValue.slice(0, -1);
    }
}

//operators functions
function add(first, second) {
    return first + second;
}

function subtract(first, second) {
    return first - second;
}

function multiply(first, second) {
    return first * second;
}

function divide(first, second) {
    return first / second;
}

function operate(first, op, second) {
    first = Number(first);
    second = Number(second);

    switch (op) {
        case "+":
            result = add(first, second);
            break;
        case "-":
            result =  subtract(first, second);
            break;
        case "x":
            result = multiply(first, second);
            break;
        case "/":
            if (second === 0) return "error";
            result = divide(first, second);
            break;
    }
    return result.toString();
}

function roundNumber(num) {
    num = Number(num);
    num = Math.round(num * 10000) / 10000;
    return num.toString();
}

