let firstNumber = null;
let secondNumber = null;
let operator = null;
let result = null;
let equalsSwitch = false;

const upperDisplayField = document.querySelector(".lastOp");
const displayCurrentAndRes = document.querySelector(".currentOpAndResult");
const inputBtns = document.querySelectorAll(".btn");
const dotDecimal = document.querySelector(".dot");
const operators = document.querySelectorAll(".arithmetic");
const eqls = document.querySelector(".equals");
const reset = document.querySelector(".clear");

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
            return result = addition(num1, num2);
        break;
        case "-":
            return result = subtraction(num1, num2);
        break;
        case "*":
            return result = multiplication(num1, num2);
        break;
        case "/":
            return result = division(num1, num2);
        break;
    }
};

function clear() {
    firstNumber = null;
    secondNumber = null;
    operator = null;
    result = null;
    equalsSwitch = false;

    upperDisplayField.textContent = "";
    displayCurrentAndRes.textContent = "0";
};

inputBtns.forEach((n) => {
    n.onclick = (e) => {
        if(equalsSwitch) {
            clear();
            displayCurrentAndRes.textContent = e.currentTarget.textContent;
        } else {
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
        if(result !== null && firstNumber !== null && secondNumber !== null) {
            if(displayCurrentAndRes.textContent !== "0") {
                upperDisplayField.textContent = `${result}` + " " + `${e.currentTarget.textContent}`;
                displayCurrentAndRes.textContent = "0"
                operator = e.currentTarget.textContent;
                firstNumber = null;
                secondNumber = null;
                equalsSwitch = false;
            } else {
                firstNumber = Number(displayCurrentAndRes.textContent);
                upperDisplayField.textContent = String(operate(result, firstNumber, operator)) + " " + `${e.currentTarget.textContent}`;
                displayCurrentAndRes.textContent = "0" 
                operator = e.currentTarget.textContent;
                firstNumber = null;
                secondNumber = null;
                equalsSwitch = false;
            }
        } else if(result !== null && firstNumber === null && secondNumber === null) {
            if(displayCurrentAndRes.textContent === "0") {
                upperDisplayField.textContent = `${result}` + " " + `${e.currentTarget.textContent}`;
                operator = e.currentTarget.textContent;
                equalsSwitch = false;
            } else {
                if(result === Number(displayCurrentAndRes.textContent)) {
                    upperDisplayField.textContent = `${result}` + " " + `${e.currentTarget.textContent}`;
                    operator = e.currentTarget.textContent;
                    displayCurrentAndRes.textContent = "0"
                    equalsSwitch = false;
                } else {
                    firstNumber = Number(displayCurrentAndRes.textContent);
                    upperDisplayField.textContent = String(operate(result, firstNumber, operator)) + " " + `${e.currentTarget.textContent}`;
                    displayCurrentAndRes.textContent = "0" 
                    operator = e.currentTarget.textContent;
                    firstNumber = null;
                    equalsSwitch = false;
                };
            };
        } else if(firstNumber !== null && secondNumber !== null) {
            secondNumber = Number(displayCurrentAndRes.textContent);
            upperDisplayField.textContent = String(operate(firstNumber, secondNumber, operator)) + " " + `${e.currentTarget.textContent}`;
            firstNumber = operate(firstNumber, secondNumber, operator);
            operator = e.currentTarget.textContent;
            displayCurrentAndRes.textContent = "0";
            equalsSwitch = false;
        } else if(firstNumber !== null && secondNumber === null && displayCurrentAndRes.textContent !== "0") {
            secondNumber = Number(displayCurrentAndRes.textContent);
            upperDisplayField.textContent = String(operate(firstNumber, secondNumber, operator)) + " " + `${e.currentTarget.textContent}`;
            firstNumber = operate(firstNumber, secondNumber, operator);
            operator = e.currentTarget.textContent;
            displayCurrentAndRes.textContent = "0";
            equalsSwitch = false;
        } else if(firstNumber === null && secondNumber === null) {
            firstNumber = Number(displayCurrentAndRes.textContent);
            operator = e.currentTarget.textContent;
            upperDisplayField.textContent = displayCurrentAndRes.textContent + " " + e.currentTarget.textContent;
            displayCurrentAndRes.textContent = "0";
            equalsSwitch = false;
        } else if(firstNumber !== null && secondNumber === null) {
            operator = e.currentTarget.textContent;
            upperDisplayField.textContent = `${firstNumber}` + " " + e.currentTarget.textContent;
            equalsSwitch = false;
        }
    };
});

eqls.onclick = (e) => {
    if(equalsSwitch) {

    } else {
        equalsSwitch = true;

        if(result !== null && firstNumber === null) {
        firstNumber = Number(displayCurrentAndRes.textContent);
        upperDisplayField.textContent = `${result}` + " " + `${operator}` + " " + `${firstNumber}`;
        displayCurrentAndRes.textContent = String(operate(result, firstNumber, operator));
        firstNumber = null;
    } else if(firstNumber !== null && secondNumber === null) {
        secondNumber = Number(displayCurrentAndRes.textContent);
        upperDisplayField.textContent = `${firstNumber}` + " " + `${operator}` + " " + `${secondNumber}`;
        displayCurrentAndRes.textContent = String(operate(firstNumber, secondNumber, operator));
    } else if(firstNumber !== null && secondNumber !== null) {
        secondNumber = Number(displayCurrentAndRes.textContent);
        upperDisplayField.textContent = `${firstNumber}` + " " + `${operator}` + " " + `${secondNumber}`;
        displayCurrentAndRes.textContent = String(operate(firstNumber, secondNumber, operator));
    };
    };
};

reset.onclick = () => {
    clear();
};