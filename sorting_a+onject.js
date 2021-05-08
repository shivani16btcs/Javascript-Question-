var obj = [
    {id : 4, name : "abc4"},
    {id : 5, name : "abc5"},
    {id : 9, name : "abc9"},
    {id : 19,name : "abc19"},
    {id : 2, name : "abc2"},
    {id : 1, name : "abc1"}
   ]
   let index=0;
   for(let i=0; i<obj.length-1; i++){
       let a=obj[i],wait=0;
       for(let j=i+1; j<obj.length; j++){
           if(obj[j].id < a.id){
               a=obj[j];
               index=j;
           }
       }
       let t=obj[i];
       obj[i]=obj[index];
       obj[index]=t;    
   }
   
   for(let i=0; i<obj.length; i++){
       
       print("{ id : "+obj[i].id+" ,name :"+obj[i].name+"}");
   }