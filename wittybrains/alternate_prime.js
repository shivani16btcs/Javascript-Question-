//write a program to print alternate prime numbers between 1 and 100..?

let prime = [];
let alternate =[]
for(let i=1;i<101;i++){
       let check=0;
            for(let j=1;j<i/2;j++){
         if(i%j ==0){
           check++;
         }
     }
     
     if(check==1){
       prime.push(i);
     }
}
for(let k=0;k<prime.length;k++){
        if(k%2==0){
     alternate.push(prime[k])
   }
}

console.log(alternate)