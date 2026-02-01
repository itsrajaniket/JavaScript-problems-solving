// 119. Pascal's Triangle

function getPascalRow(rowIndex) {
  const row = [1]; // first element is always 1

  for (let k = 1; k <= rowIndex; k++) {
    // compute binomial coefficient iteratively
    row[k] = (row[k - 1] * (rowIndex - k + 1)) / k;
  }

  return row;
}

// Examples:
console.log(getPascalRow(0)); // [1]
console.log(getPascalRow(1)); // [1, 1]
console.log(getPascalRow(2)); // [1, 2, 1]
console.log(getPascalRow(3)); // [1, 3, 3, 1]
