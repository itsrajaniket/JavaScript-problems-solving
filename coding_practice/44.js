function countnum(number) {
  let n = 1;
  let count = 0;
  while (number >= n) {
    n = n * 10;

    count++;
  }
  return count;
}
console.log(countnum(3423));
// 4
console.log(countnum(100));
// 3
console.log(countnum(7));
