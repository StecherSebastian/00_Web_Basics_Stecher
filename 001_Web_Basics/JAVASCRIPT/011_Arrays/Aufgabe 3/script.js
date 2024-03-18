// Write a program that prints the temperature closest to 0 among input data. If two numbers are equally close to zero, 
// positive integer has to be considered closest to zero (for instance, if the temperatures are -5 and 5, then display 5).

// Input
// 5
// 1 -2 -8 4 5
// Output
// 1

function closestToZero(temperatures) {
    let closest = Infinity;
    for (let temp of temperatures) {
        if (Math.abs(temp) < Math.abs(closest)) {
            closest = temp;
        }
    }
    return closest;
}

const temperatures = [1, 0.5, -0.5, -2, -8, 4, 5];
console.log(closestToZero(temperatures));

