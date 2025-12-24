// 20️⃣ Convert String to Uppercase (Manual)
// 20️⃣ Convert String to Uppercase (Manual)
// \way 1

let str14 = "hello";
let str15 = "";
for (let i = 0; i < str14.length; i++) {
  if (97 < str14.charCodeAt(i) > 122) {
    let a = str14.charCodeAt(i) - 32;
    let b = String.fromCharCode(a);
    str15[i] = b;
  }
}
console.log(str15);
