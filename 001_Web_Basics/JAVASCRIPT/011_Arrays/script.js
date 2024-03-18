let a = 4;
let b = 9;
let c = 8;

let arr = [4, 9, 8];
console.log(arr[1]);

arr.push(10, 3);

for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
}

console.log("=====================================================");

// Erstelle ein Array mit folgenden Werten:
// 4,1,2,3

let arry = [4, 1, 2, 3];

// Füge die Werte 17 und 199 dazu

arry.push(17, 199);

//     a. Gib alle Werte in einer Schleife aus!

for (let index = 0; index < arry.length; index++) {
    console.log(arry[index]);
}

//     b. Zähle alle Werte zusammen und gib das Ergebnis aus

let summe = 0;
for (let index = 0; index < arry.length; index++) {
    summe += arry[index];
    if (index == arry.length - 1) {
        console.log(summe);
    }
}


//     c. Berechne den Mittelwert der Zahlen und gib das Ergebnis aus

summe = 0;
let mittelwert;
for (let index = 0; index < arry.length; index++) {
    summe += arry[index];
    if (index == arry.length - 1) {
        mittelwert = summe / arry.length;
        console.log(mittelwert);
    }
}


console.log("=====================================================");

//Erstelle ein Array mit folgenden Strings:
//"Susi", "Paula", "Hans"

let friends = ["Susi", "Paula", "Hans"];

//Gib folgenden Satz aus:
//"Meine Freunde sind Susi, Paula und Hans

console.log("Meine Freunde sind " + friends.slice(0, -1).join(", ") + " und " + friends.slice(-1) + ".");


//Füge "Sepp" dazu. Nun soll die ausgabe folgendermaßen lauten:

friends.push("Sepp");

//"Meine Freunde sind Susi, Paula, Hans und Sepp"

console.log("Meine Freunde sind " + friends.slice(0, -1).join(", ") + " und " + friends.slice(-1) + ".");


console.log("=====================================================");