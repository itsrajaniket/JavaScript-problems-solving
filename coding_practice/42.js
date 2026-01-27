arr = [10, 8, 30, 34, 50, -68, 1, 21, 5, 7, 3, 4, 2, 43, 45, 0, 100];

function largest(arr) {
  let largest1 = -Infinity;
  let largest2 = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest1) {
      largest2 = largest1;
      largest1 = arr[i];
    } else if (arr[i] > largest2) {
      largest2 = arr[i];
    }
  }

  //   return largest1;
  return largest2;
}

console.log(largest(arr));
