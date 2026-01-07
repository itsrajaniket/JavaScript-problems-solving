//  17️⃣ Count Vowels in a String
// Count how many vowels (a, e, i, o, u) are present in a string.
// way1 

let str5 = "education" 
let str6 = "aeiouAEIOU"
let count5 = 0

for(let i = 0; i < str5.length; i++){
  if (str6.includes(str5[i])){
    count5 = count5  + 1
  }
}
console.log(count5)

// way2

function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("Hello JavaScript World!")); // 6