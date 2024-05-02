
let field_2D = [
    [0, 0, 0],
    [1, 1, 1],
    [2, 2, 2]
];

printField();
checkIfWon();

function printField() {
    for (row = 0; row < field_2D.length; row++) {
        let actualRow = field_2D[row];
        let output = " ";
        for (col = 0; col < actualRow.length; col++) {
            if (col == 0) {
                output += "| ";
            };
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
            output += " | ";
        };
        console.log(output);
    };
};

function checkIfWon() {
    // Check rows
    for (row = 0; row < field_2D.length; row++) {
        if (field_2D[row][0] != 0 && (field_2D[row][0] == field_2D[row][1] && field_2D[row][0] == field_2D[row][2])) {
            if (field_2D[row][0] == 1) {
                console.log("X has won!");
                break;
            } else if (field_2D[row][0] == 2) {
                console.log("O has won!");
                break;
            };
        };
    };
    for (col = 0; col < field_2D[0].length; i++) {
        if (field_2D[0][col] != 0 && (field_2D[0][col] == field_2D[1][col] && field_2D[0][col] == field_2D[2][col])) {
            
        };
    };
};