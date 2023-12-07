// Erstelle eine Variable banana mit dem Wert "Banane"
let banana = "Banane";
// Erstelle eine Variable apple mit dem Wert "Apple"
let apple = "Apple"

// Erstelle eine Variable bananaPricePerKilo mit dem Wert 2.14
let bananaPricePerKilo = 2.14;
// Erstelle eine Variable applePricePerKilo mit dem Wert 3.43
let applePricePerKilo = 3.43;

// Ein Apfel hat durchschnittlich ein Gewicht von 0.34 Kilo
let appleWeight = 0.34;
// Eine Banane hat durchschnittlich ein Gewicht von 0.22 Kilo
let bananaWeight = 0.22;

// Gib folgendes aus: Anzahl Bananen/Äpfel pro Kilo, Preis pro Banane/Apfel
let bananaPerKilo = 1 / bananaWeight;
let applePerKilo = 1 / appleWeight;

console.log(bananaPerKilo + " Bananen pro Kilo");
console.log(applePerKilo + " Äpfel pro Kilo");

// Preis von 8 Äpfeln
console.log("8 Äpfel kosten " + 8 / applePerKilo * applePricePerKilo + " €");
// Preis von 17 Bananen
console.log("17 Bananen kosten " + 17 / bananaPerKilo * bananaPricePerKilo + " €");
// Preis von 1 Tonne Äpfel
console.log(applePricePerKilo * 1000 + " € per Tonne Äpfel");
// Preis von 1 Tonne Bananen
console.log(bananaPricePerKilo * 1000 + " € per Tonne Bananen");