// Suppose there is an array having an duplicate and non-duplicate element
// we have to print sum of all the duplicate element and product of all the duplicate element .

let a=[2,2,3,4,5,6,7,5,6,6,5];
let out={};
let output=[];
for(let i=0;i<a.length;i++){
   if(out[a[i]]){
   		out[a[i]]=out[a[i]]+1;
   }
   else{
     out[a[i]]=1
   }
}

var key = Object.keys(out);
var value= Object.values(out);

console.log(key)
console.log(value)

for(let i=0;i<value.length;i++){
  let obj={
    sum : 0,
    product:1,
    key: key[i],
    times: value[i]
  }
   for(let j=0;j<value[i];j++){
    obj.sum=obj.sum+ parseInt(key[i]);
    obj.product=obj.product*parseInt(key[i]);
   }
   output.push(obj);
}


console.log(output)