// Write a function that takes a string s and returns the string reversed.

function reverseString(s) {
  let reversed = "";
  for (let i = s.length - 1; i >= 0; i--) {
    reversed += s[i];
    console.log(reversed);
  }
  return reversed;
}

// Test
console.log(reverseString("hello")); // "olleh"
console.log(reverseString("aniket")); // "tekina"
console.log(reverseString("1234"));
