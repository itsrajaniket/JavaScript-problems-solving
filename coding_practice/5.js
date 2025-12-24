// 5=> Write a function called findLargest that takes an array of numbers and returns the largest number.

// findLargest([3, 7, 2, 9, 4]);
// for(let i = 0 ; i< findLargest.length; i++){
//    findLargest[i] >  findLargest[i+1] ? [i] : [i+1]
// }

// way 1

function findLargest(arr) {
  let Largest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > Largest) {
      Largest = arr[i];
    }
  }
  return Largest;
}

console.log(findLargest([0, 7, 2, 9, 4, 13]));

// way 2

function findLargest1(arr) {
  return Math.max(...arr);
}
console.log(findLargest([0, 7, 2, 19, 4, 13]));
console.log("next qustion");
