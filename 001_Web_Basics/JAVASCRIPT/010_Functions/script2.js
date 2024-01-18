//Baue folgende Funktionen:

//add(a,b)
function add(a, b) {
    return a + b;
}

let addition = add(4, 5);
console.log(addition);

//subtract(a,b)
function subtract(a, b) {
    return a - b;
}

let subtraction = subtract(45, 23);
console.log(subtraction);

//mulitply(a,b)
function multiply(a, b) {
    return a * b;
}

let multiplication = multiply(6, 8);
console.log(multiplication);

//supercalculation(a,b) -> Formel: (a+b)/2 * a
function supercalculation(a, b) {
    return (a + b) / 2 * a;
}

let supercalculationResult = supercalculation(4, 9);
console.log(supercalculationResult);

//printEasterDate(year) -> Diese Funktion bekommt das gewünschte Jahr und schreibt das Datum von Ostern.
function printEasterDate(year) {
    n = year - 1900;
    a = n % 19;
    b = Math.floor((7 * a + 1) / 19);
    month = (11 * a + 4 - b) % 29;
    quartal = Math.floor(n / 4);
    week = (n + quartal + 31 - month) % 7;
    p = 25 - month - week;

    if (p > 0) {
        console.log("Ostersonntag ist der " + p + ". April.");
    }
    else {
        p += 31;
        console.log("Ostersonntag ist der " + p + ". März.");
    }
}


let n;
let a;
let b;
let month;
let quartal;
let week;
let p;

printEasterDate(2024);



