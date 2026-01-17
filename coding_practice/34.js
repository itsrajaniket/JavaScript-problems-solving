// Find the First Word Length

function firstWordLength(s) {
  let result = s.trimStart();

  let count = 0;
  for (let i = 0; i < result.length; i++) {
    if (result[i] !== " ") {
      count += 1;
    } else break;
  }

  return count;
}
console.log(firstWordLength("Hello World")); // 5
console.log(firstWordLength("  fly me   to   the moon")); // 3 ("fly")
console.log(firstWordLength("a")); // 1
console.log(firstWordLength("a ")); // 1
console.log(firstWordLength(" i am good ")); // 1
