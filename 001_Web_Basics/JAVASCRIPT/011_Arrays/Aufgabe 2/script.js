// The program:
// Invertiere eine Bitfolge


// EXAMPLE:
// Input
// 000111000
// Output
// 111000111


let bit = ["000111000"];

for (i = 0; i < bit[0].length; i++) {
    if (bit[0][i] === '0') {
        bit[0] = bit[0].substring(0, i) + '1' + bit[0].substring(i + 1);
    } else if (bit[0][i] === '1') {
        bit[0] = bit[0].substring(0, i) + '0' + bit[0].substring(i + 1);
    }
}

console.log(bit);