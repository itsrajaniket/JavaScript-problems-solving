/*3=> Create a function called isEven that takes one number as input.
If the number is even, print "Even"
If the number is odd, print "Odd" */

// way 1
function isEven(num4) {
  if (num4 % 2 == 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}
isEven(12);
isEven(121);
isEven(1);

// way 2
let isEven1 = (num4) => {
  if (num4 % 2 == 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
};
isEven1(2);
isEven1(11);
isEven1(18);

// way 3

function isEven2(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}
console.log(isEven2(252));
console.log(isEven2(25));
