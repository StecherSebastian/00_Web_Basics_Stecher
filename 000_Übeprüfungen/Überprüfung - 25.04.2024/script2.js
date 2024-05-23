
const temperaturesWeek1 = "-1,5,1,-10,-11,2,30,-8,-14";
const temperaturesWeek2 = "-1,5,3,-10,-11,2,30,-8,-44";
// Berechne den Mittelwert der Temperaturen der beiden Wochen
// Gib aus
// Mittelwert Woche 1 : xxx
// MIttwlwert Woche 2 : xxx
// "Woche 1 war wärmer" oder "Woche 2 war wärmer" oder "Beide Wochen waren gleich warm"

const split1 = temperaturesWeek1.split(",");
const split2 = temperaturesWeek2.split(",");

let Mittelwert1 = 0;
let Mittelwert2 = 0;

for (i = 0; i < split1.length; i++) {
    Mittelwert1 += parseFloat(split1[i]);
}
Mittelwert1 /= split2.length;

for (i = 0; i < split2.length; i++) {
    Mittelwert2 += parseFloat(split2[i]);
}
Mittelwert2 /= split2.length;

console.log("Mittelwert Woche 1 : " + Mittelwert1);
console.log("Mittelwert Woche 2 : " + Mittelwert2);

if (Mittelwert1 > Mittelwert2) {
    console.log("Woche 1 war wärmer");
} else if(Mittelwert1 < Mittelwert2) {
    console.log("Woche 2 war wärmer");
} else {
    console.log("Beide Wochen waren gleich warm");
}