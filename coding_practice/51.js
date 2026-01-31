// Leetcode Questions 283. Move Zeroes

function moveZeroes(nums) {
  let lastNonZeroFoundAt = 0;

  // Step 1: Move non-zero elements forward
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastNonZeroFoundAt] = nums[i];
      lastNonZeroFoundAt++;
    }
  }

  // Step 2: Fill remaining positions with zeros
  for (let i = lastNonZeroFoundAt; i < nums.length; i++) {
    nums[i] = 0;
  }
}

let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); // Output: [1,3,12,0,0]
