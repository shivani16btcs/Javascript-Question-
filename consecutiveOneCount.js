var inputArr= "111000010101010101011110101011111110000111";
var countArr=[], prevCount=0, currentCount=0,countIndex=0; max=0;

// Push Count 
for(let i=0;i<inputArr.length;i++){
     prevCount= currentCount;
    if(inputArr[i]==1){
        currentCount=currentCount+1;
    }
    else{
        currentCount=0;
    }
    if(currentCount<prevCount){
        countArr[countIndex]=prevCount;
        countIndex=countIndex+1;
    }
}

// Find Max
for(let i=0; i<countArr.length;i++){
    if(countArr[i]>max){
        max=countArr[i];
    }
}
//Final Answer
print(max);
