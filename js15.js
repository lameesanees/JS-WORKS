a="apple is red apple is sweet"
words=a.split(" ")
console.log(words);
res={}
for(let i of words){
    if(i in res){
        res[i]+=1
    }
    else{
        res[i]=1
    }
}
console.log(res)