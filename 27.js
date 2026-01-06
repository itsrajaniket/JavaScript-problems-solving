


arr = [2,3,4,5,6,8,431,542,23545,46]

function fun( arr , x ){
for(i=0; i< arr.length ;i++){
     if (arr[i] == x){
      return i
      break
    } 
}
return -1
}
let result = fun( arr , 54); 

console.log(result)