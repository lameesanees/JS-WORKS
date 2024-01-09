//function
// block of code to achieve a s[ecific task
// used for code reusability

// function display() {
//     console.log("hello all");
// }
// display()

// console.log("how r u ?")
// display()

//parameters
function add(a, b) {
    c = a + b
    return c
    // console.log(c)
}
//arguements 
// add(12,2)
// add(1,1)

// val=add(12,35)
// console.log(val)
// if(val%2==0){
//     console.log("value is even")
// }
// else{
//     console.log("value is odd")
// }

// Recursive Function
// A function that calls itself. 

// num=6
// res=1
// for(i=1;i<=num;i++){
//     res*=i
// }
// console.log(res)

// num = 5 
// function fact(a) {
//     if (a == 1) {
//         return 1
//     }
//     else {
//         return a * fact(a - 1)
//     }
// }
// res = fact(num)
// console.log(res)

//  res=(a,b)=>a+b
//  console.log(res(10,20));
// fact=(a)=>{
//     if(a==1){
//         return1
//     }
//     else{
//         return a*fact(a-1)
//     }
// }

 fact=(a)=>a==1?1:a*fact(a-1)
 console.log(fact(5))