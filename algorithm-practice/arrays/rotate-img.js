/*
You are given an n x n 2D matrix representing an image, rotate the image by
90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input
2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]

Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

Input: matrix = [[2,29,20,26,16,28],[12,27,9,25,13,21],[32,33,32,2,28,14],[13,14,32,27,22,26],[33,1,20,7,21,7],[4,24,1,6,32,34]]
Expected Output: [[4,33,13,32,12,2],[24,1,14,33,27,29],[1,20,32,32,9,20],[6,7,27,2,25,26],[32,21,22,28,13,16],[34,7,26,14,21,28]]
*/

//VERSION 1
var rotate = function (matrix) {

  let right = matrix.length - 1;
  let left = 0;

  while (left < right) {
    for (let i = left; i < right; i++) {

      const top = left;
      const bottom = right;

      // save the top left value
      let topLeft = matrix[top][left + i];

      //move the bottom left into the top left
      matrix[top][left + i] = matrix[bottom - i][left];

      //move the bottom right into the bottom left
      matrix[bottom - i][left] = matrix[bottom][right - i];

      //move the top right into the bottom right
      matrix[bottom][right - i] = matrix[top + i][right];

      //move the top left into the top right
      matrix[top + i][right] = topLeft;

    }
    right -= 1;
    left += 1;
  }

};


const matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
rotate(matrix1);
console.log('after rotate(matrix1)', matrix1);

const matrix2 = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]];
rotate(matrix2);
console.log('after rotate(matrix2)', matrix2);


//VERSION 2
function rotate2(matrix) {
  const n = matrix.length;
  for (let layer = 0; layer < n / 2; layer++) {
    const first = layer;
    const last = n - 1 - layer;
    for (let i = first; i < last; i++) {
      const offset = i - first;
      const top = matrix[first][i];
      // left -> top
      matrix[first][i] = matrix[last - offset][first];
      // bottom -> left
      matrix[last - offset][first] = matrix[last][last - offset];
      // right -> bottom
      matrix[last][last - offset] = matrix[i][last];
      // top -> right
      matrix[i][last] = top;
    }
  }
}

// Test case
const matrix = [
  [2, 29, 20, 26, 16, 28],
  [12, 27, 9, 25, 13, 21],
  [32, 33, 32, 2, 28, 14],
  [13, 14, 32, 27, 22, 26],
  [33, 1, 20, 7, 21, 7],
  [4, 24, 1, 6, 32, 34]
];

rotate2(matrix);

// Output: [[4,33,13,32,12,2],[24,1,14,33,27,29],[1,20,32,32,9,20],[6,7,27,2,25,26],[32,21,22,28,13,16],[34,7,26,14,21,28]]
console.log('matrix', matrix);
