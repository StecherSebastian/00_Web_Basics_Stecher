let inputField = document.getElementById("input");
let calculation = ' ';


function buttonNumberZero() {
    calculation += '0';
    inputField.value = calculation;
}

function buttonNumberOne() {
    calculation += '1';
    inputField.value = calculation;
}

function buttonNumberTwo() {
    calculation += '2';
    inputField.value = calculation;
}

function buttonNumberThree() {
    calculation += '3';
    inputField.value = calculation;
}

function buttonNumberFour() {
    calculation += '4';
    inputField.value = calculation;
}

function buttonNumberFive() {
    calculation += '5';
    inputField.value = calculation;
}

function buttonNumberSix() {
    calculation += '6';
    inputField.value = calculation;
}

function buttonNumberSeven() {
    calculation += '7';
    inputField.value = calculation;
}

function buttonNumberEight() {
    calculation += '8';
    inputField.value = calculation;
}

function buttonNumberNine() {
    calculation += '9';
    inputField.value = calculation;
}

// Komma

function buttonComma() {
    calculation += '.';
    inputField.value = calculation;
}


// Operators
function buttonPlus() {
    calculation += '+';
    inputField.value = calculation;
}
function buttonMinus() {
    calculation += '-';
    inputField.value = calculation;
}
function buttonMultiplication() {
    calculation += '*';
    inputField.value = calculation;
}
function buttonDivision() {
    calculation += '/';
    inputField.value = calculation;
}

// Calculate & Clear Button
function calculate() {
    try {
        calculation = Function("return" + calculation)();
        inputField.value = calculation;
    } catch (e) {
        inputField.value = 'ERROR';
    }
}

function buttonClear() {
    calculation = ' ';
    inputField.value = calculation;
}