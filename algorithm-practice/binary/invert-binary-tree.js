/*
Given the root of a binary tree, invert the tree, and return its root.


1. if root is null, return null
2. Create temp variable and assign it to root.left
3. Change root.left to equal root.right
4. Change root.right to equal the temp variable
5. invertTree(root.left)
6. invertTree(root.right)
7. Return root

*/

var invertTree = function(root) {
if (root === null) {
  return null
}

let temporary = root.left;
root.left = root.right;
root.right = temporary;

invertTree(root.left);
invertTree(root.right);

return root;
};
