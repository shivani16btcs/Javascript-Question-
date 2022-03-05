let a=10;
let b=6;

function HCF(a,b){
 if(a==0||b==0){
 	return a||b
 }else if(a>b){
 	return HCF(a-b,b)
 }else{
 	return HCF(a,b-a)
 }
}


let hcf = HCF(a,b);

let lcm= (a*b)/hcf;

console.log(lcm)
