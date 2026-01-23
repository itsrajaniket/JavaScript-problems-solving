function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleaned = str.replace(/[^a-z0-9]/gi, "").toLowerCase();

  // Compare cleaned string with its reverse
  const reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
