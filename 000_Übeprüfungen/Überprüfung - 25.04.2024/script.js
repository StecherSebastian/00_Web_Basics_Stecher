const data = "Hans geht heute schwimmen! das ist gut";
// Gib jedes 3te Wort aus
// Output
// Hans schwimmen gut
const split = data.split(" ");
let Output = "";
for (i = 0; i < split.length; i++) {
    if (i % 3 == 0) {
        Output += split[i];
        Output += " ";
    }
}

console.log(Output);