/*
Given a binary search tree (BST), find the lowest common ancestor
(LCA) node of two given nodes in the BST.

According to the definition of LCA on Wikipedia:
“The lowest common ancestor is defined between two nodes p and q as
the lowest node in T that has both p and q as descendants
(where we allow a node to be a descendant of itself).”
*/

var lowestCommonAncestor = function (root, p, q) {
  let result = null;

  const dfs = (node) => {
    if(node === null) {
      return false;
    }
    let left = dfs(node.left);
    let right = dfs(node.right);

    let current = node === p || node === q;

    if (left + right + current >= 2) {
      result = node;
    }
    return left || right || current;
  }

  dfs(root);
  return result;
};
