const data = "Hans geht heute schwimmen";
// Drehe die Wörter um
const dataArray = data.split(" ");
let dataReversed = "";
for (i = dataArray.length - 1; i >= 0; i--) {
    dataReversed += dataArray[i];
    dataReversed += " ";
};
// Output
// schwimmen heute geht Hans
console.log(dataReversed);


const number = "1,2,1,4,6,8,7";
// Finde die kleinste Zahl und gib an wie oft sie vorkommt
const numberArray = number.split(",");
let smallestNumber = Infinity;
let smallestNumberTimes = 0;
for (i = 0; i < numberArray.length; i++) {
    if (numberArray[i] < smallestNumber) {
        smallestNumber = numberArray[i];
    }
};
for (i = 0; i < numberArray.length; i++) {
    if (numberArray[i] == smallestNumber) {
        smallestNumberTimes++;
    }
};
// Output: 1 2
console.log(parseFloat(smallestNumber), smallestNumberTimes);


const temperatures = "-1,5,51,-10,-11,2,90,-8,-44"
// Berechne dem Mittelwert der Temperaturen
// Werte die größer gleich 50 und kleiner gleich -30 sind
// Ausreißer dürfen nicht berücksichtigt werden.
const temperaturesArray = temperatures.split(",");
let output = 0;
let count = 0;
for (i = 0; i < temperaturesArray.length; i++) {
    if (temperaturesArray[i] < 50 && temperaturesArray[i] > -30) {
        output += parseFloat(temperaturesArray[i]);
        count++;
    }
}
output /= count;
console.log(output);