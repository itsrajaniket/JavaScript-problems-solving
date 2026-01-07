// find largest number
let arr = [-2, 3, 4, -5, 6, -8, -431, 542, 23545, 46];
let largest = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    largest = arr[i];
  }
}
console.log(largest)