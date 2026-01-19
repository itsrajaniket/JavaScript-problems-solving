// Given a string s consisting of words and spaces, return the length of the last word in the string.

function lengthOfLastWord(s) {
  let count = 0;

  // Loop backwards through the string
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      // Count non-space characters
      count++;
    } else if (count > 0) {
      // If we've already counted some characters and hit a space, stop
      return count;
    }
  }

  return count;
}

// Examples
console.log(lengthOfLastWord("Hello World")); // 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // 4
console.log(lengthOfLastWord("a")); // 1
console.log(lengthOfLastWord("a ")); // 1
