// 16️⃣ Count Characters in a String
// way 1
let str = "javascript123";

let count3 = 0;
for (let i = 0; str[i] !== undefined; i++) {
  count3 += 1;
}

console.log(count3); // Output: 13

// way 2
let str1 = "111javascript123";
let count4 = 0;
let i = 0;
while (str1[i] !== undefined) {
  count4 = count4 + 1;
  i++;
}
console.log(count4);

console.log("next qustion");
