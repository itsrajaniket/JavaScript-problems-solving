// 1 => Write a program to calculate and print the sum of all numbers in the array.

// way 1

let num = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < num.length; i++) {
  sum = sum + num[i];
}

console.log(sum);

// way 2

function sumArray(num) {
  let sum1 = 0;
  for (let i = 0; i < num.length; i++) {
    sum1 = sum1 + num[i];
  }
  return sum1;
}
let num1 = [10, 20, 30];
console.log(sumArray(num));

// way 3

let sumArr = (num2) => {
  let sum2 = 0;
  for (let i = 0; i < num2.length; i++) {
    sum2 = sum2 + num2[i];
  }
  return sum2;
};
let num2 = [10, 20, 30];
console.log(sumArr(num));
