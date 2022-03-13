for(var i=0;i<3;i++){
    console.log("out "+i);
    setTimeout(()=>{
        console.log("INSIDE "+i);
    })
}