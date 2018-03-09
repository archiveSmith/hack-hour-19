/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function superbalanced(tree) {
  if (tree === null) return 0;

  let x = superbalanced(tree.left);
  let y = superbalanced(tree.right);

  if (x === false || y === false) return false;

  let heightLeft = x + 1;
  let heightRight = y + 1;

  if (Math.abs(heightLeft - heightRight) > 1) return false;
  return Math.max(heightLeft, heightRight);
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
