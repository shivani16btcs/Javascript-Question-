function fun(x){
    let counter=0
  return function count(){
          return  counter++
  }


}

let cont=fun()
console.log(cont())
console.log(cont())
console.log(cont())