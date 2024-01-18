//Funktion
// DRY - Dont repeat yourself
function printMenu(name, age, place) {
    console.log("Willkommen " + name + "! You are " + age + " years old and come from " + place + ".");
    console.log("Drücke ");
    console.log("1 für Start");
    console.log("2 für Statistik");
    console.log("3 für Ende");
}

function add(a, b) {
    return a + b - 17 + 0.4;
}

printMenu("Peter", 17, "Lustenau");
printMenu("Hans", 54, "Dornbirn");

let result = add(4,7);
console.log(result);