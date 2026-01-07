//  18️⃣ Reverse a String 
// Reverse a string manually using a loop.

let str7 = "hello to my self"
let str8 = ""

for(let i = str7.length - 1 ; i >= 0 ; i--){
  str8 = str8 + (str7[i])
}
console.log(str8)

//  way 2

let str9 = "hello to my self";
let str10 = "";

for (let char of str9) {
  str10 = char + str10;  // add each char in front
}

console.log(str10); // "fles ym ot olleh"