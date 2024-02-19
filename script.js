function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        alert("Cannot divide by zero!");
        return NaN;
    }
    return a / b;
}

function operate(first, op, last) {
    switch (op) {
        case "+":
            return add(first, last);
        case "-":
            return subtract(first, last);
        case "*":
            return multiply(first, last);
        case "/":
            return divide(first, last);
    }
}

const operatorsBtns = document.querySelectorAll('.signs .button');

let firstNmb = 0, op = '', secondNmb = 0;

//for populate the display
const screen = document.querySelector('.screen');
const numbersBtns = document.querySelectorAll('.button.digit');
let displayVal = '';
let opIsclicked = 0;

function populateDisplay(button) {
    if (opIsclicked) {
        screen.innerText = '';
        opIsclicked = 0;
    }
    screen.innerText += button.innerText;
    displayVal = screen.innerText;
}

numbersBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        populateDisplay(e.target);
    });
});

//get all operators buttons
function setToDefault() {
    operatorsBtns.forEach((btn) => {
        btn.style.backgroundColor = '';
    });
}

operatorsBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        setToDefault();
        e.target.style.backgroundColor = '#bf2bbb';
        firstNmb = parseFloat(displayVal);
        op = e.target.innerText;
        opIsclicked = 1;
    });
});

//get equal button
const equal = document.querySelector('.equal');
equal.addEventListener('click', () => {
    setToDefault();
    if (op) {
        secondNmb = parseFloat(displayVal);
        let result = operate(firstNmb, op, secondNmb);
        screen.innerText = result;

        firstNmb = result;
        op = '';
        secondNmb = 0;
        displayVal = result.toString(); 
    }
});

