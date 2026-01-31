// 88. Merge Sorted Array

function merge(nums1, m, nums2, n) {
  // Pointers for nums1, nums2, and the end of merged array
  let i = m - 1; // last valid element in nums1
  let j = n - 1; // last element in nums2
  let k = m + n - 1; // last position in nums1

  // Merge from the back
  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
}
let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

merge(nums1, m, nums2, n);
console.log(nums1); // Output: [1,2,2,3,5,6]
