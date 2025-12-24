// /2=> Write a program to count how many vowels (a, e, i, o, u) are present in the string.

// way 1

let name = "aniket is real";
let count = 0;
for (let i = 0; i < name.length; i++) {
  if (
    name[i] == "a" ||
    name[i] == "e" ||
    name[i] == "i" ||
    name[i] == "o" ||
    name[i] == "u"
  ) {
    count = count + 1;
  }
}
console.log(count);

// way 2

let name1 = "aAaniket is real";
let vowels = "aeiouAEIOU";
let count1 = 0;
for (let i = 0; i < name1.length; i++) {
  if (vowels.includes(name1[i])) {
    count1 = count1 + 1;
  }
}
console.log(count1);
