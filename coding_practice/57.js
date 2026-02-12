// Removing duplicates from arrays using set()

const mySet = new Set([1, 2, 3, 3, 4, 5, 6]);
console.log(mySet); // Set(4) {1, 2, 3, 4}

mySet.add(5);
console.log(mySet.has(2)); // true
mySet.delete(3);
console.log(mySet.size); // 4
console.log(mySet);

const numbers = [1, 2, 2, 3, 4, 4, 6];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers); // [1, 2, 3, 4]
