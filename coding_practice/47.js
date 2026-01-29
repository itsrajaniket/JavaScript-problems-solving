let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let val = 2;

function array(num, val) {
  let x = 0;
  for (let i = 0; i < num.length; i++) {
    // console.log(i);
    if (num[i] != val) {
      num[x] = num[i];
      x = x + 1;
    }
    // console.log(x);
  }
  return x;
}

console.log(array(nums, val));
