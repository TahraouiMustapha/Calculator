const firstNmb = 0, operator = '', lastNmb = 0;


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

const allButtons =  Array.from(document.querySelectorAll(".button"));
const populateBtns = allButtons.filter((btn) => 
    btn.innerText !== "=" && btn.innerText !== "AC" 
);


let displayVal;
// const digits = Array.from(document.querySelectorAll('.button.digit'));

populateBtns.forEach((btn) => {
    btn.addEventListener('click',(e) => {
        screen.innerText += e.target.innerText; 
        displayVal = screen.innerText;  
    })
});
//operate on the two numbers when '=' clicked
const equal = document.querySelector('.equal');
const operators = ['+','-','*','/'];

equal.addEventListener('click', ()=>{
    let newArray = Array.from(displayVal);
    let indexOp = findFirstIndexOp(newArray);
    
    let firstNmb = parseFloat(displayVal.slice(0, indexOp));
    let secondNmb = parseFloat(displayVal.slice(indexOp+1));
    screen.innerText = operate(firstNmb, newArray[indexOp], secondNmb);
});

function findFirstIndexOp (array) {
    return array.findIndex((op) => operators.includes(op));

}





