// a=20
// b=10
// b=130
// if(a>b){
// console.log("a is big");
// }
// else{
// console.log("b is big")
// }

// a=20
// b=130
// c=190

// if(a>b && a>c){
//     console.log("a is big");
// }
// else if(b>c){
//     console.log("b is big")
// }
// else{
//     console.log(" c is big")
// }

a = 500
b = 130
c = 190

if (a > b) {
    if (a > c) {
        console.log("a is big")
    }
    else {
        console.log("c is big")
    }
}
else if (b > c) {
    console.log("b is big")
}
else {
    console.log("c is big")
}