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
for(let left = 0 ,right = str13.length - 1; left < right  ; left++ , right--){ 
  if (str13[left] !== str13[right]){
    palindrome = false;
    break ;
  }
}

console.log(palidrome ? "Palindrome" : "Not a palindrome" )