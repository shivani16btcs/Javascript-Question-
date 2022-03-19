// Find the second largest number in an array,

let a = [2,3,4,5,6,1,-2,3];

let lar=a[0];
let sec=a[0];
for(let i=0; i<a.length ;i++){
	  if(a[i]>=lar){
      sec=lar
    	lar=a[i];
    }else if(a[i]>sec){
    	sec=a[i];
    }
}

console.log(lar +"  "+sec);