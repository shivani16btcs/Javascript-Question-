/* find index in binary search  */

function BS(a,x){
  let l = parseInt(a.length/2);
  if(l<=0){
    return 0
  }
  if(a[l]==x){
  	return l;
  }
  else if(a[l] < x){
   	return l+BS(a.splice(l,a.length),x)
  }  else {
   	return BS(a.splice(0,l),x)
  }
}


let a = [3,4,5,6,70,89,100];
 console.log(BS(a,100)) 