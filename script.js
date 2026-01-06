// Your JavaScript code here
// Start coding here!
console.log('Hello, JavaScript!')

// 1 => Write a program to calculate and print the sum of all numbers in the array. 

// way 1 

let num =[10,20,30,40,50] ;
let sum = 0 ;
for(let i= 0; i< num.length; i++){
  sum = sum + num[i]
}

console.log(sum)

// way 2 

function sumArray(num) {

let sum1 = 0 ;
for(let i= 0; i< num.length; i++){
  sum1 = sum1 + num[i]
}
return sum1
}
let num1 = [10,20,30] ;
console.log(sumArray(num))

// way 3

let sumArr = (num2) => {
  let sum2 = 0 ;
for(let i= 0; i< num2.length; i++){
  sum2 = sum2 + num2[i]
}
return sum2
}
let num2 = [10,20,30] ;
console.log(sumArr(num))

//2=> Write a program to count how many vowels (a, e, i, o, u) are present in the string.

// way 1 

let name = "aniket is real";
let count = 0
for(let i = 0 ; i<name.length; i++){
  if(name[i]=="a" || name[i]=="e" || name[i]=="i" || name[i]=="o" ||name[i]=="u" ){
count = count + 1
  }

}
console.log(count)

// way 2

let name1 = "aAaniket is real";
let vowels = "aeiouAEIOU";
let count1 = 0
for(let i = 0 ; i < name1.length; i++){
  if(vowels.includes(name1[i])){
    count1 = count1 + 1
  }
}
console.log(count1)


/*3=> Create a function called isEven that takes one number as input.
If the number is even, print "Even"
If the number is odd, print "Odd" */

// way 1 
function isEven(num4){
  if(num4%2 == 0){console.log("Even")}
  else{console.log("Odd")};

} 
isEven(12)
isEven(121)
isEven(1)

// way 2 
let isEven1 = (num4) => {
  if(num4%2 == 0){console.log("Even")}
  else{console.log("Odd")};
}
isEven1(2)
isEven1(11)
isEven1(18)

// way 3

function isEven2(num){
  return num%2 === 0 ? "Even" : "Odd" ;
}
console.log(isEven2(252))
console.log(isEven2(25))

//4=> Write a program to print the name and city {Ravi lives in Delhi}

let person = {
  name: "Ravi",
  age: 25,
  city: "Delhi"
};
// way 1 
console.log(person.name + " lives in " + person.city)
// way 2
console.log(`${person.name} lives in ${person.city}`)


// 5=> Write a function called findLargest that takes an array of numbers and returns the largest number.

// findLargest([3, 7, 2, 9, 4]);
// for(let i = 0 ; i< findLargest.length; i++){
//    findLargest[i] >  findLargest[i+1] ? [i] : [i+1]
// }

// way 1 

function findLargest(arr){
let Largest = 0;
for(let i =0 ; i < arr.length; i++){
  if(arr[i] > Largest){
    Largest = arr[i]
  }
}
return Largest
}

console.log(findLargest([0, 7, 2, 9, 4,13]));

// way 2

function findLargest1(arr){
  return Math.max(...arr)
}
console.log(findLargest([0, 7, 2, 19, 4,13]));
  console.log("next qustion")

// 6️⃣ Print Numbers from 1 to 20
{
for(let i = 1 ; i < 21 ; i++){
  console.log(i)
}}
  console.log("next qustion")
// 7️⃣ Print Even Numbers from 1 to 20

for(let i = 1 ; i < 21 ; i++ ){
if(i%2===0){
  console.log(i)
}
}
 console.log("next qustion")
// 8️⃣ Sum of Numbers from 1 to 100

let sum4 = 0 ;
for(let i = 0 ; i <= 100; i++){
  sum4 = sum4 + i
}
 console.log(sum4)

  console.log("next qustion")

// 9️⃣ Multiplication Table Print the table of 5.


function mult(num){
for(let i = 1 ; i < 11 ; i ++){
   const x = num*i
  console.log(`${num} x ${i} = ${x}`)
}}

mult(5)
mult(17)
mult(127)

  console.log("next qustion")

  // 🔟 Count Digits in a Number Given 12345, count how many digits it has.
   
  //  way 1
   let num6 = 123456

     const num7 = num6.toString()
     console.log(num7.length)


    //  11️⃣ Print All Elements of an Array
    let arr = [5, 10, 15, 20];
    for(let i = 0 ; i < arr.length ; i++){
      let x = arr[i]
      console.log(x)
      console.log(arr[i])
    }

    // 12️⃣ Sum of Array Elements
    arr = [2, 4, 6, 8]

    let sum6 = 0
    for(let i = 0 ; i < arr.length ; i++){
      sum6 = sum6 + arr[i] ;
    }
    console.log(sum6)

// 13️⃣ Find the Largest Number in an Array

let arr1 = [3, 9, 1, 7, 18]
let large = arr1[0]
for(let i = 0 ; i < arr1.length ; i++){
large < arr1[i] ? large = arr1[i] : large
}
console.log(large)


  console.log("next qustion")

// 14️⃣ Count Even Numbers in an Array
// [1, 2, 3, 4, 6]


// 15️⃣ Reverse an Array (Manual)

let arr3 = [1, 22, 13, 74]
let arr4 = []
for(let i = arr3.length - 1   ; i>=0 ; i--){
  arr4.push(arr3[i])
}
console.log(arr4)

// 16️⃣ Count Characters in a String
// way 1
let str = "javascript123";

let count3 = 0;
for (let i = 0; str[i] !== undefined; i++) {
  count3 = count3 + 1;
}

console.log(count3); // Output: 13

// way 2 
let str1 = "111javascript123";
let count4 = 0
let i = 0
while(str1[i] !== undefined){
    count4 = count4 + 1 ;
    i++
}
console.log(count4);

 console.log("next qustion")

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


// 18️⃣ Reverse a String 
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

// 19️⃣ Check Palindrome

let str11 = "raceca1r"
let str12 = ""
for(let i = str11.length - 1; i >= 0 ; i--){
  str12 = str12 + str11[i]
}
console.log(str12); 
if (str11 == str12) {
   console.log(`word ${str11} is a palindrome `);  
}
else{
   console.log(`word ${str11} is NOT a palindrome `);  
}

// way 2 
let str13 = "madam"
let palidrome = true 
for(let left = 0 ,right = str13.length - 1; left < right ; left++ , right--){
  if (str13[left] !== str13[right]){
    palindrome = false;
    break ;
  }
}

console.log(palidrome ? "Palindrome" : "Not a palindrome" )

// 20️⃣ Convert String to Uppercase (Manual)