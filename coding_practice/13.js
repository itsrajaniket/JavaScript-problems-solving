// 13️⃣ Find the Largest Number in an Array

let arr1 = [3, 18, 1, 7, 9];

Boolean result = findLargest(arr1);
console.log(result);

function findLargest(arr) {
  let large = arr1[0];
  let index = 0;
  for (let i = 0; i < arr1.length; i++) {
    large < arr1[i] ? ((large = arr1[i]), (index = i)) : large;
  }

  return arr[index] && index;
}
