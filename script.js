let firstNumber = null;
let secondNumber = null;
let operator = null;

const upperDisplayField = document.querySelector(".lastOp");
const displayCurrentAndRes = document.querySelector(".currentOpAndResult");
const inputBtns = document.querySelectorAll(".btn");
const dotDecimal = document.querySelector(".dot");
const operators = document.querySelectorAll(".arithmetic");
const eqls = document.querySelector(".equals");

function addition(firstNum, secondNum) {
    return firstNum + secondNum;
};

function subtraction(firstNum, secondNum) {
    return firstNum - secondNum;
};

function multiplication(firstNum, secondNum) {
    return firstNum * secondNum;
};

function division(firstNum, secondNum) {
    return firstNum / secondNum;
};

function operate(num1, num2, operator) {
    switch(operator){
        case "+":
            return addition(num1, num2);
        break;
        case "-":
            return subtraction(num1, num2);
        break;
        case "*":
            return multiplication(num1, num2);
        break;
        case "/":
            return division(num1, num2);
        break;
    }
};

inputBtns.forEach((n) => {
    n.onclick = (e) => {
        if(displayCurrentAndRes.textContent === "0" && e.currentTarget.textContent !== "0" ||
           displayCurrentAndRes.textContent === " 0" && e.currentTarget.textContent !== "0") {
            displayCurrentAndRes.textContent = e.currentTarget.textContent;
        } else if(displayCurrentAndRes.textContent === "0" && e.currentTarget.textContent === "0" ||
                  displayCurrentAndRes.textContent === " 0" && e.currentTarget.textContent === "0") {
                    displayCurrentAndRes.textContent = " 0";
        } else {
            displayCurrentAndRes.textContent += e.currentTarget.textContent;
        };
    };    
});
// One dot limit
dotDecimal.onclick = (e) => {
    if(!displayCurrentAndRes.textContent.includes(".")) {
        displayCurrentAndRes.textContent += e.currentTarget.textContent;
    } else {
        displayCurrentAndRes.textContent = displayCurrentAndRes.textContent;
    }
};

operators.forEach((n) => {
    n.onclick = (e) => {
        if(firstNumber === null && secondNumber === null) {
            firstNumber = Number(displayCurrentAndRes.textContent);
            operator = e.currentTarget.value;
            upperDisplayField.textContent = displayCurrentAndRes.textContent + " " + e.currentTarget.textContent;
            displayCurrentAndRes.textContent = "0";
        } else if(firstNumber !== null && secondNumber === null) {
            operator = e.currentTarget.value;
            upperDisplayField.textContent = `${firstNumber}` + " " + e.currentTarget.textContent;
        }
    };
});

eqls.onclick = (e) => {
    if(firstNumber !== null && secondNumber === null) {
        secondNumber = Number(displayCurrentAndRes.textContent);
        displayCurrentAndRes.textContent = String(operate(firstNumber, secondNumber, operator));
    };
};