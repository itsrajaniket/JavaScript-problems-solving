// 242. Valid Anagram

var isAnagram = function (s, t) {
  let arr1 = s.split("").sort().join("");
  let arr2 = t.split("").sort().join("");
  if (s.length !== t.length) {
    return false;
  }
  if (arr1 === arr2) {
    return true;
  } else return false;
};
