nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

function array(num) {
  let x = 0;
  for (let i = 0; i < num.length; i++) {
    // console.log(i);
    if (num[i] > num[x]) {
      x = x + 1;
      num[x] = num[i];
    }
    // console.log(x);
  }
  return num.slice(0, x + 1);
}

console.log(array(nums));
