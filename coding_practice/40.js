// Definition for a binary tree node
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function inorderTraversal(root) {
  const result = [];

  function traverse(node) {
    if (!node) return;
    traverse(node.left);      // Left
    result.push(node.val);    // Root
    traverse(node.right);     // Right
  }

  traverse(root);
  return result;
}
