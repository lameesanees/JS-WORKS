// let a;
// a=10
// a=15 // reassigning
// let a=15 //redeclaration
// console.log(a);

// if(true){
// let a= 10
// console.log(a)
// }
// console.log(a)

// a=10
// console.log(a)
// var a //variable hosting

// display()
// function display(){
//     console.log("hello") //function hosting
// }

// a=10
// let a;
// console.log(a);

// const a =10;
// // const a=15
// console.log(a)

// if(true){
//     const a=10
//     console.log(a)
// }

// const a=[1,2,3]
// a[0]="apple"
// console.log(a)

// var a=10
// function display(){
// console.log(a)
// }                                //global scope
// display()

// if(true){
// console.log(a)
// }
// console.log(a)

// function display(){
//     var a=10
//     console.log(a)
// }
// display()                 //local scope

// if(true){
//     console.log(a)
// }
// console.log(a)

// if (true) {
//     // let a = 10
//     var a=10                  //block scope
//     console.log(a)
// }
// console.log(a)


//fibonacci
limit=10
a=0
b=1
for(i=1;i<=limit;i++){
    if(a<=limit){
        console.log(a);
    }
    let c=a+b
    a=b
    b=c
}



