let firstNmb = 0, op = '', secondNmb = 0;

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

//for populate the display
const screen = document.querySelector('.screen');
const numbersBtns = document.querySelectorAll('.button.digit');
let displayVal;
let opIsclicked = 0;
function populateDisplay(button) {
    if(opIsclicked) {
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
const operatorsBtns = document.querySelectorAll('.signs .button');
function setToDefault() {
    operatorsBtns.forEach((btn) => {
        btn.style.backgroundColor = '';
    })
}
operatorsBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        setToDefault();
        e.target.style = "background-color:#bf2bbb;";
        firstNmb = parseFloat(displayVal);
        op = e.target.innerText;

        opIsclicked = 1;
    })
})

//get equal butt
const equal = document.querySelector('.equal');

equal.addEventListener('click', () => {
//store the scnNmb from displayVal after check if op si clicked
    setToDefault();
    if(op) {
        secondNmb = parseFloat(displayVal);
        let result = operate(firstNmb, op, secondNmb);
        screen.innerText = result;

        op = '';
        secondNmb = 0;
    }

});
