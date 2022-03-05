let a = "aadsasads";
let b =a.split("");
 
let out={}
let maxk='';
let maxv=0
for(let ch of a){
   if(!out[ch]){
      out[ch]=1;
   }
   else{
   out[ch]++;
   }
   
   if(out[ch]>maxv){
   maxv=out[ch];
   maxk=ch
   }
}

console.log(out)
 console.log("-------------    ")
 console.log(maxk+"  "+maxv)
