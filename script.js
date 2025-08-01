let firstNumber = null;
let secondNumber = null;
let operator = null;

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