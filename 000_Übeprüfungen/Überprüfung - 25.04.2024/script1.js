
const numbers = "8,2,1,4,6,1,8,7";
// Zähle alle Zahlen die zwischen 4 (inklusive und 8 exklusive) liegen
// Output: 3
const split = numbers.split(",");
let count = 0;

for (i = 0; i < split.length; i++) {
    if(split[i] >= 4 && split[i] < 8){
        count++;
    }
}

console.log(count);