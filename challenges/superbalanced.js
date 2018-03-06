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
/*
  just like the zip-linked-list problem, I have a problem adding complexity
  to any data structure...

  Stream of thought....
  define a leftCount and a rightCount set to Numberzero initial value
  Does the tree have a left? if yes, increment leftCount
    if not do nothing.
  Does the tree have a right? if yes, increment rightCount

  Now going one level deeper confuses me
  if this.left.this.left !== null, increment leftCount.
    this.left.this.left???? what?! that doesn't make sense.

  Ok maybe it's that this is when the recursion comes in....
  maybe it's that I run superbalanced() with this.left as input
  AND this.right as input.
  If that were the case, then I need to make sure that I don't add
  a new leftCount and rightCount.... I need the recursive call to
  work on the same l and r variables.


*/
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
