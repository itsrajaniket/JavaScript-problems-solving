// 15️⃣ Reverse an Array (Manual)

let arr3 = [11, 22, 13, 74];
let arr4 = [];
// for (let i = arr3.length - 1; i >= 0; i--) {
//   arr4.push(arr3[i]);
// }
//console.log(arr4);

for (let i = 0; i < arr3.length; i++) {
  arr4.push(arr3[arr3.length - 1 - i]);
}
console.log(arr4);
