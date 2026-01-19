// Given two binary strings a and b, return their sum as a binary string.

function addBinary(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result = "";

  while (i >= 0 || j >= 0 || carry) {
    let sum = carry;

    if (i >= 0) sum += Number(a[i--]); // take bit from a
    if (j >= 0) sum += Number(b[j--]); // take bit from b

    result = (sum % 2) + result; // add current bit
    carry = Math.floor(sum / 2); // update carry
  }

  return result;
}

// ✅ Test cases
console.log(addBinary("11", "1")); // "100"
console.log(addBinary("1010", "1011")); // "10101"
console.log(addBinary("0", "0")); // "0"
console.log(addBinary("111", "111")); // "1110"
