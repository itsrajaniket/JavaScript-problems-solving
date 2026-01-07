let arr = [-2, 3, 4, -5, 6, -8, -431, 542, 23545, 46];

let count = 0
for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] < 0){
            count += 1
        }
}
console.log(count)