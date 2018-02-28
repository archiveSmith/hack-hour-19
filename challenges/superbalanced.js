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
  if (!tree) return true;
  const leftBalanced = superbalanced(tree.left);
  const leftH = getHeight(tree.left);
  const rightBalanced = superbalanced(tree.right);
  const rightH = getHeight(tree.right);
  console.log('On node', tree.value);
  console.log('Left balanced?', leftBalanced, 'Right balanced?', rightBalanced);
  console.log('Height difference:', Math.abs(leftH - rightH));
  if (leftBalanced && rightBalanced && Math.abs(leftH - rightH) <= 1) return true;
  return false;
}

const getHeight = tree => {
  if (!tree) return -1;
  const leftH = getHeight(tree.left);
  const rightH = getHeight(tree.right);
  return Math.max(leftH, rightH) + 1;
};


module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
