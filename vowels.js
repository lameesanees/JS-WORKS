text = "apple is red sweet"
count = 0
for (i of text) {
    if (i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == "u") {
        console.log(i)
        count++
    }
}
console.log("count of vowels in given string value is:", count)