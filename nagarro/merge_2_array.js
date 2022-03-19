//Merge an array of size n into another array of size m+n.

let a = [2,3,4,5];
let b = [3,4,7,8,9,9];
    let m=new Array(a.length+b.length);

function merge(a,b){
    let i,j,k;
    i=j=k=0;
    while(i<a.length && j<b.length){
        if(a[i]<b[j]){
          m[k++]=a[i];
           i++;
        }else{
          m[k++]=b[j];
           j++;
        }
    }
    while(i<a.length){
          m[k++]=a[i];
           i++;
    }  
    while(j<b.length){
          m[k++]=b[j];
         j++;
    }
    return m;
}


console.log(merge(a,b));