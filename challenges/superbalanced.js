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
  let left = 0;
  let right = 0;

  if (tree.right !== null) {
    right++
    tree.right = tree
    return superbalanced(tree)
  }

  if (tree.left !== null) {
    left++
    tree.left = tree
    return superbalanced(tree)
  }

  if (left > right) {
    if (left - right < 2) {
      return true
    }
  } else if (left < right) {
    if (right - left < 2) {
      return true
    }
  } else {
    return false
  }

}

module.exports = { BinaryTree: BinaryTree, superbalanced: superbalanced };
