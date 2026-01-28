function reverse(x) {
  let xcopy = x;
  if (x < 0) {
    x = Math.abs(x);
  }

  let rev = 0;
  while (x > 0) {
    y = x % 10;
    rev = rev * 10 + y;
    x = Math.floor(x / 10);
  }

  let limit = 2 ** 31;
  if (rev > limit - 1 || rev < -limit) {
    return 0;
  }
  return xcopy < 0 ? -rev : rev;
}

console.log(reverse(123));
