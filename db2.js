students=[
    {id:1,ename:"ajith",class:"BSC CS",age:20},
    {id:2,ename:"vijith",class:"BCA",age:21},
    {id:3,ename:"sujith",class:"BSC CS",age:22},
    {id:4,ename:"anujith",class:"MCA",age:19},
]

//1. print name of every students
students.forEach(item=>console.log(item.ename))
 
//2. print name of every students who's age >20
students.filter(item=>item.age>20).forEach(item=>console.log(item.ename))

//3. print names of every students from BSC CS
students.filter(item=>item.class == "BSC CS").forEach(item=>console.log(item.ename))

//4. find student details whose id = 4 
res=students.find(item=>item.id==4)
console.log(res)

//5. create an array of classs from given db
res=students.map(item=>item.class)
console.log(res)

//6. Sort the data set in the ascending order of students age
students.sort((a, b) => a.age - b.age);
console.log(students);
