let str = "aaabbbccbbbbaaaddddddddd"; 
//  {
//     char: "d",
//     count: 8
//   }
let a = str.split('');
let max = 1;
let ans= {char: a[0], count:1}
for( let i=1; i<a.length; i++ ){
   if(i==a.length-1 && max >  ans['count']){
        ans['char']=a[i-1];
        ans['count']=max;
   }
   if(a[i] == a[i-1]){
     max++
   }else{
      if(max >  ans['count']){
       ans['char']=a[i-1];
        ans['count']=max;
        }
            max=1;
   }
}

console.log(ans)
