// let firstNmb = '';let secondNmb = '';
let operator = '';
let previousVal = '';
let currentVal = '';

// let displayVal = '';

document.addEventListener("DOMContentLoaded", () => {
    let clear = document.querySelector('.clear');
    let equal = document.querySelector('.equal');
    let point = document.querySelector('.point');

    const numbers = document.querySelectorAll('.number');
    const operators = document.querySelectorAll('.operator');

    const screen = document.querySelector('.screen');

    numbers.forEach((num) => {
        num.addEventListener('click', (e) => {
            handleNumbers(e.target.textContent);
            screen.innerText = currentVal;
        })
    })

    operators.forEach((op) => {
        op.addEventListener('click', (e) => {
            hundleOperators(e.target.textContent);
            screen.innerText = '';
        })
    })

    clear.addEventListener('click', () => {
        screen.innerText = '0';
        currentVal = '';
        previousVal = '';
        operator = '';
    });

    equal.addEventListener('click', () => {
        operate();

        if (previousVal.length <= 10) {
            screen.innerText = previousVal;
        } else {
            screen.innerText = previousVal.slice(0, 10) + "...";
        }
    });

});

function handleNumbers(num) {
    if (currentVal.length <= 10) {
        currentVal += num;
    }
}

function hundleOperators(op) {
    operator = op;
    previousVal = currentVal;
    currentVal = '';
}

function operate() {
    previousVal= Number(previousVal);
    currentVal = Number(currentVal);

    switch (operator) {
        case "+":
            previousVal += currentVal;
            break;
        case "-":
            previousVal -= currentVal;
            break;

        case "x":
            previousVal *= currentVal;
            break;

        case "/":
            if (currentVal === 0) return "error can not divide";
            previousVal /= currentVal;
            break;
    }
    previousVal = roundNumber(previousVal);
    previousVal = previousVal.toString();
    currentVal = currentVal.toString(); 
}

function roundNumber(num) {
    return Math.round(num * 100000) / 100000;
}
