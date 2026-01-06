// 25️⃣ Function to Find Maximum from Array

function findMax(arr) {
  let max = arr[0]; // assume first element is max
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Example usage:
let numbers = [25, 47, 3, 99, 12];
console.log(findMax(numbers)); // Output: 99
