function BS(arr,x){
    let l=arr.length;
    if(l<=0){
    return "array empty"
    }
    else if(l==1){
           if(x==arr[0]){
        return "Found"
        }else{
         return "not found"
        }
    }
    else{
        let half = parseInt(l/2);
        if(arr[half]==x){
        return "Found"
       }else if(arr[half] > x){
             let q=arr.splice(0, half)
             return this.BS(q,x)
 
       }else{
             let q=arr.splice(half, l)
 
             return this.BS(q,x)
 
       }
    }
 }
 
 
 let a = BS([2,3,4,5,6],6);
  console.log(a);