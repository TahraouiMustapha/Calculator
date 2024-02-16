
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
    return a / b;
}

function operate(fisrt, op, last ) {
    switch (op) {
        case "+":
            return add(fisrt, last);
        case "-":
            return subtract(fisrt, last);
        case "*":
            return multiply(fisrt, last);
        case "/":
            return divide(fisrt, last);           
    }
}

//function populate the display number buttons 
const screen = document.querySelector('.screen');

let displayVal ;
const digitsBtns = document.querySelectorAll('.button.digit');
//function for populate the display
function populateDisplay (numberBtn) {
    screen.innerText += numberBtn.innerText;
    displayVal = screen.innerText; 
}

digitsBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (opIsClicked) {
            screen.innerText = '';
            opIsClicked = 0;
        }
        populateDisplay(e.target);

    });
})

//for clear button
const clear = document.querySelector('.button.clear');
clear.onclick = () => {
    screen.innerText = '';
} 

//for operators buttons
const operatorsBtns = document.querySelectorAll('.signs .button');
let firstNmb;
let op;
let opIsClicked ;
operatorsBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (opIsClicked) {
            op.style = "background-color:#444;";
            let result = operate(firstNmb, op.innerText, parseFloat(displayVal));
            displayVal = result;
            screen.innerText = result;
            opIsClicked = 0;
        } else {
            e.target.style = "background-color:#666;";
            firstNmb = parseFloat(displayVal);
            op = e.target;
            opIsClicked = 1;
        }
       

    })
})

//for equal button
const equal = document.querySelector('.equal');
equal.onclick = () => {
    op.style = "background-color:#444;";
    let result = operate(firstNmb, op.innerText, parseFloat(displayVal));
    displayVal = result;
    screen.innerText = result;
    opIsClicked = 0;
}