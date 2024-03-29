/*
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Input: numRows = 1
Output: [[1]]

Constraints:
1 <= numRows <= 30
*/

function generate(numRows) {
  if (numRows <= 0) {
    return [];
  }

  const triangle = [[1]];

  for (let i = 1; i < numRows; i++) {
    const prevRow = triangle[i - 1];
    const newRow = [1];

    for (let j = 1; j < prevRow.length; j++) {
      newRow.push(prevRow[j - 1] + prevRow[j]);
    }

    newRow.push(1);
    triangle.push(newRow);
  }

  return triangle;
}

console.log(generate(1))
console.log(generate(5))
