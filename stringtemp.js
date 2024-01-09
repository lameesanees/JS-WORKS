// a={name:"ajith",age:20,class:"bsc"}
// console.log(a['name'])
// a['name']='ajith KK'
// console.log(a)
// a['phone']='215463214'
// console.log(a)

a = {
    name: "ajith", age: 20, class: "bsc", display: function () {
        return `${this.name} is ${this.age} years old`
    }
}
console.log(a.name)
res=a.display()
console.log(res)