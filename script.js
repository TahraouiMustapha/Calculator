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
            console.log(add(fisrt, last));
            break;
        case "-":
            console.log(subtract(fisrt, last));
            break;
        case "*":
            console.log(multiply(fisrt, last));
            break;
        case "/":
            console.log(divide(fisrt, last));
            break;            
        default:
            console.log("another try!");
    }
}

//function populate the display number buttons 
const screen = document.querySelector('.screen');

const allButtons =  Array.from(document.querySelectorAll(".button"));
const populateBtns = allButtons.filter((btn) => 
    btn.innerText !== "=" && btn.innerText !== "AC" 
);

let displayVal;


populateBtns.forEach((btn) => {
    btn.addEventListener('click',(e) => {
        screen.innerText += e.target.innerText; 
        displayVal = screen.innerText;  
    })
});
//operate on the two numbers when '=' clicked
const equal = document.querySelector('.equal');
equal.addEventListener('click', ()=>{
    let indexOp = findIndexOperator(displayVal);

    let firstNmb = displayVal.split('').slice(0, indexOp ).join('');
    let secondNmb = displayVal.split('').slice(indexOp+1).join('');
});


function findIndexOperator (string) {
    let operators = ['+','-','*','/'];
    for (let op of operators) {
        if (string.includes(op)) return string.indexOf(op) ;
    }
    return -1;
}





