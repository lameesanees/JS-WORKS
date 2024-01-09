let n = 4;
let string = "";
let count = 1;


for (i = 1; i <= n; i++) {
    space = " "
    for (j = 1; j <= i; j++) {
        string += count;
        count++;
        space += " "
    }
    string += "\n";
}
console.log(string + space)