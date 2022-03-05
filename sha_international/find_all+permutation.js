let string= "stack";

let permutation=[]

for(let i=0;i<string.length;i++){
   let a= string.slice(0,i);
   for(let j=i;j<string.length;j++){
     let out=a;
     out=a+string[j];
     permutation.push(out);
  }
}

console.log(permutation)




Output  ---
["s", "t", "a", "c", "k", "st", "sa", "sc", "sk", "sta", "stc", "stk", "stac", "stak", "stack"]
