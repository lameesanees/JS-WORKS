employee=[
    {id:1,ename:"ajith",age:23,dept:"Mech",salary:25000},
    {id:2,ename:"sujith",age:24,dept:"IT",salary:35000},
    {id:3,ename:"vijith",age:23,dept:"ECE",salary:40000},
    {id:4,ename:"jijith",age:22,dept:"IT",salary:15000},
    {id:5,ename:"bijith",age:26,dept:"CA",salary:85000},
]

//print name of every employee
// employee.forEach(item=>console.log(item.ename))

//print each employee name and agee as "ajith is 23 year old"
// employee.forEach(item=>console.log(item.ename,"is",item.age,"years old"))

//print the details of employee who's name is vijith
// res=employee.find(item=>item.ename=="vijith")
// console.log(res)

//create an array of department from given db
// res=employee.map(item=>item.dept)
// console.log(res)

// to remove dup values from the Db
// dep=[]
// for(i of res){
//     if(dep.includes(i)){
//         continue
//     }
//     else{
//         dep.push(i)
//     }
// }
// console.log(dep)

//print name of employee who's salary is 40000
// employee.filter(item=>item.salary=40000).forEach(item=>console.log(item.ename) )

//print the name of employee with highest salary
// res=employee.find(item=>item.salary>40000)
// console.log(res.ename)

res=employee.reduce((prev,next)=>prev.salary>next.salary?prev:next)
console.log(res.ename)

