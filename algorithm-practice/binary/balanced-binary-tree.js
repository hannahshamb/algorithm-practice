/* Given a binary tree, determine if it is
height-balanced

A height-balanced binary tree is a binary tree in which the depth of the
two subtrees of every node never differs by more than one.
*/

var isBalanced = function(root) {
  let result = true;

  maxHeight = (node) => {
    if (!node) {
      return 0;
    }
    let left = maxHeight(node.left),
    right = maxHeight(node.right);

    if( Math.abs(left - right) > 1) {
      result = false;
    }
    return 1 + Math.max(left, right);
  }

  maxHeight(root);
  return result;
}
