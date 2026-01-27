arr = [10, 20, 30, 34, 50, 68, 1, 21, 5, 7, 3, 4, 2, 78];

function largest(arr) {
  let largest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}

console.log(largest(arr));
