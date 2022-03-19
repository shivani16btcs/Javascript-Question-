// Given an array , separate positives and negatives strings.


let a = [0,3,-5,-6,-1,4,-6,9,-8,-2,4,6,7,9,-7];
let i,j;
i=j=0;
for(j=0;j<a.length;j++){
	if(a[j]<0){
  	if( i!=j){
      let t= a[j];
      a[j]=a[i];
      a[i]=t;
    }
    i++;
  }
}

console.log(a);