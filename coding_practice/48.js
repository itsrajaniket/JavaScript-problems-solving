// Write a function that reverses a string. The input string is given as an array of characters s.

function reverseString(s) {
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    const temp = s[i];
    s[i] = s[j];
    s[j] = temp;
    i++;
    j--;
  }
  return s;
}
let s = ["h", "e", "l", "l", "o"];
reverseString(s);
console.log(s); // ["o", "l", "l", "e", "h"]
