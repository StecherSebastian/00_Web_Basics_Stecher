import { unwatchFile } from "fs";
import { resolve } from "path";
import { createInterface } from "readline";
const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
});
const readLineAsync = () => {
    return new Promise((resolve) => {
        readline.question("", (userRes) => {
            resolve(userRes);

        });
    });
};


let kontostand = 0;
let inputOfUser;

while (inputOfUser != '4') {
    console.log(`Geben Sie die Nummer der zu ausführenden Funktion ein.
   1. Einzahlen
   2. Abheben
   3. Konto
   4. Beenden`);
    inputOfUser = await readLineAsync();
    switch (inputOfUser) {
        case '1':
            console.log("Geben Sie den einzuzahlenden Betrag ein.");
            inputOfUser = parseFloat(await readLineAsync());

            if(isNaN(inputOfUser)){
                console.log("Ungültige Eingabe.");
            }

            kontostand += inputOfUser;

            break;
        case '2':
            console.log("Geben Sie den einzuzahlenden Betrag ein.");
            inputOfUser = parseFloat(await readLineAsync());

            kontostand -= inputOfUser;
            break;
        case '3':
            console.log("Ihr Kontostand beträgt: " + kontostand + "€");
            break;
        case '4':
            console.log("Programm wird beendet.");
            break;
    }
}
readline.close()