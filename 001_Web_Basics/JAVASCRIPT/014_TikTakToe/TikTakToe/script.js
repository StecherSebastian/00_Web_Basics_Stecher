import { userInfo } from "os";
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


// Variable die das Spielfeld enthält
let field_2D = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

// Variable zum zwischenspeichern des Users Inputs
let userInput;

// Funktion die das Spielfeld zurücksetzt
function reset() {
    field_2D = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
}

// Funktion die das Spielfeld im Terminal ausgibt
function printField() {
    // Ausgeben der 3 geschachtelten Arrays als Zeilen.
    for (let row = 0; row < field_2D.length; row++) {
        let actualRow = field_2D[row];
        let output = " ";
        // Strukturieren des Spielfelds
        for (let col = 0; col < actualRow.length; col++) {
            if (col == 0) {
                output += "| ";
            };
            // Einfüllen von X & O
            switch (actualRow[col]) {
                case 0:
                    output += " ";
                    break;
                case 1:
                    output += "X";
                    break;
                case 2:
                    output += "O";
                    break;
            }
            // Für Strukturierung
            output += " | ";
        };
        console.log(output);
    };
};

// Funktion die überprüft ob jemand gewonnen hat
function checkIfWon() {
    // Geht die Reihen durch
    for (let row = 0; row < field_2D.length; row++) {
        // Überprüft ob jemand in der aktuellen Reihe gewonnen hat
        if (field_2D[row][0] != 0 && (field_2D[row][0] == field_2D[row][1] && field_2D[row][0] == field_2D[row][2])) {
            // Überprüft ob X & O gewonnen hat
            if (field_2D[row][0] == 1) {
                console.log("X has won!");
                reset();
                return true;
                break;
            } else if (field_2D[row][0] == 2) {
                console.log("O has won!");
                reset();
                return true;
                break;
            };
        };
    };

    // Geht die Spalten durch
    for (let col = 0; col < field_2D[0].length; col++) {
        // Überprüft ob jemand in der aktuellen Spalte gewonnen hat
        if (field_2D[0][col] != 0 && (field_2D[0][col] == field_2D[1][col] && field_2D[0][col] == field_2D[2][col])) {
            // Überprüft ob X & O gewonnen hat
            if (field_2D[0][col] == 1) {
                console.log("X has won!");
                reset();
                return true;
                break;
            } else if (field_2D[0][col] == 2) {
                console.log("O has won!");
                reset();
                return true;
                break;
            };
        };
    };

    // Übeprüft ob jemand diagonal von Obenlinks bis Untenrechts gewonnen hat
    if (field_2D[0][0] != 0 && (field_2D[0][0] == field_2D[1][1] && field_2D[0][0] == field_2D[2][2])) {
        // Überprüft ob X & O gewonnen hat
        if (field_2D[0][0] == 1) {
            console.log(" ");
            console.log("X has won!");
            console.log(" ");
            reset();
            return true;
        } else if (field_2D[0][0] == 2) {
            console.log(" ");
            console.log("O has won!");
            console.log(" ");
            reset();
            return true;
        };
    }
    // Übeprüft ob jemand diagonal von Untenlinks bis Obenrechts gewonnen hat
    else if (field_2D[2][0] != 0 && (field_2D[2][0] == field_2D[1][1] && field_2D[2][0] == field_2D[0][2])) {
        // Überprüft ob X & O gewonnen hat
        if (field_2D[2][0] == 1) {
            console.log(" ");
            console.log("X has won!");
            console.log(" ");
            reset();
            return true;
        } else if (field_2D[2][0] == 2) {
            console.log(" ");
            console.log("O has won!");
            console.log(" ");
            reset();
            return true;
        };
    };
};

async function game() {
    console.log("-----------------");
    console.log("Start Game - y/n:");
    console.log(" ");
    userInput = await readLineAsync();

    if (userInput == "y") {
        console.log(" ");
        console.log("Which player should start - x/o:");
        console.log(" ");
        userInput = await readLineAsync();
        if (userInput == "x") {
            console.log(" ");
            printField();
            playerX();
        } else if (userInput == "o") {
            console.log(" ");
            printField();
            playerO();
        }
    } else {
        console.log(" ");
        console.log("# Stopped Game #");
        console.log(" ");
        readline.close();
    };
};

async function playerX() {
    console.log(" ");
    console.log("Player X is active:");
    console.log("Input Schema - 0 0");
    console.log(" ");
    userInput = await readLineAsync();

    userInput = userInput.split(" ");
    if (field_2D[userInput[0]][userInput[1]] == 0) {
        field_2D[userInput[0]][userInput[1]] = 1;
    } else {
        console.log(" ");
        console.error("# Invalid Input try again #");
        console.log(" ");
        playerX();
    }

    console.log(" ");
    printField();
    if (checkIfWon() == true) {
        game();
    } else {
        playerO();
    }
}

async function playerO() {
    console.log(" ");
    console.log("Player O is active:");
    console.log("Input Schema - 0 0");
    console.log(" ");
    userInput = await readLineAsync();

    userInput = userInput.split(" ");
    if (field_2D[userInput[0]][userInput[1]] == 0) {
        field_2D[userInput[0]][userInput[1]] = 2;
    } else {
        console.log(" ");
        console.error("# Invalid Input try again #");
        console.log(" ");
        playerO();
    }

    console.log(" ");
    printField();
    if (checkIfWon() == true) {
        game();
    } else {
        playerX();
    }
}

game();