let a = 19999;
let b = 2;

console.log(8 % 2); //Modulo - Rest einer Division

if (a % 8 == 0) {
    console.log("Number is even");
}
else {
    console.log("Number is odd");
}


for (i = 0; i < 500; i++) {
    if (i % 5 == 0) {
        console.log("X");
    }
}


console.log("-------------------------");
// Erstelle mit Hilfe einer Schleife und Modulo das folgende Ausgabe liefert (Rechteckbeispiel adaptieren): 
// X X X X 
// O O O O 
// X X X X 
// O O O O 

for (i = 0; i < 4; i++) {
    if (i % 2 == 0) {
        console.log("X X X X");
    }
    else if (i % 4 != 0) {
        console.log("O O O O");
    }
}


console.log("-------------------------");
// 2. Versuche in einer for - Schleife (1-100) alle geraden Zahlen zu addieren (zwei Lösungswege ⇒ Zähler dahingehend verändern das er nur gerade Zahlen zählt und mit Modulo arbeiten.)

let summe = 0;
for (i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        summe += i
    }
    if (i == 100) {
        console.log("Die Summe aller geraden Zahlen ist " + summe);
    }
}

console.log("-------------------------");
// 3. Versuche mit einer for/while Schleife den Anfangsbuchstaben deines Namens auszugeben, z.B.:
//    XXXX
//  X      X
//  X
//    XXXX          
//         X  
//  X      X
//    XXXX

for (i = 0; i <= 6; i++) {
    if (i % 3 == 0) {
        console.log("    XXXX");
    }
    else if (i % 2 == 1) {
        console.log("  X      X");
    }
    else if (i == 2) {
        console.log("  X");
    }
    else if (i == 4) {
        console.log("         X");
    }
}