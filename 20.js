//

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
// 20️⃣ Convert Lowercase to Uppercase Without Using toUpperCase() Method

let str14 = "4444ello";
let str15 = "";
for (let i = 0; i < str14.length; i++) {
  console.log(str14.charCodeAt(i));
  if (str14.charCodeAt(i) >= 97 && str14.charCodeAt(i) <= 122) {
    let a = str14.charCodeAt(i) - 32;
    //   console.log("1" + a);
    //console.log("test" + a);
    let b = String.fromCharCode(a);
    console.log("new --" + b);

    str15[i] = b;
  }
}
console.log(str14);
