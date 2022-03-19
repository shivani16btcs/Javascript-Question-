

let s="dog is barking";

s=s.split(" ");
let r =[];
for(let i=0;i<s.length; i++){
  let ss= s[i].split("");
  let op=""
	for(let j=ss.length-1;j>=0;j--){
  	op= op+ss[j]
  }
  s[i]=op;
}

for(let i=s.length;i>=0;i--){
 r[i]=s[i];
}

console.log(r.join(" "))