// LeetCode 110 (Balanced Binary Tree)

var isBalanced = function (root) {
  // Helper function to compute height and check balance
  function check(node) {
    if (!node) return 0; // height of null node is 0

    let leftHeight = check(node.left);
    if (leftHeight === -1) return -1; // left subtree not balanced

    let rightHeight = check(node.right);
    if (rightHeight === -1) return -1; // right subtree not balanced

    if (Math.abs(leftHeight - rightHeight) > 1) return -1; // current node not balanced

    return Math.max(leftHeight, rightHeight) + 1; // return height
  }

  return check(root) !== -1;
};
