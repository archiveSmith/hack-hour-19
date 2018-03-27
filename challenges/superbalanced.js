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

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

/**
 * =============
 * LIVE SOLUTION
 * =============
 */

const superbalanced = tree => {
  // check valid input
  if (!tree || !tree.value) return;
  if (!tree.left && !tree.right) return true;

  // create a helper function to
  //  recursively count tree depth
  const countTree = branch => {
    // check for no left/right
    if (!branch.left && !branch.right) return 0;
    // check for only right or left
    if (!branch.left && branch.right) return 1 + countTree(branch.right);
    if (branch.left && !branch.right) return 1 + countTree(branch.left);
    // handle both
    return 1 + Math.max(countTree(branch.left), countTree(branch.right));
  };

  // get the depth of the left branch
  const leftLvls = countTree(tree.left);
  // get the depth of the right branch
  const rightLvls = countTree(tree.right);

  // return true if left and right branches
  //  are 1 or less depths apart
  // else return false
  return Math.abs(leftLvls - rightLvls) <= 1;
};

/**
 * ==================
 * CODESMITH SOLUTION
 * ==================
 */

const height = tree => {
  if (tree === null) return 0;
  return 1 + Math.max(height(tree.left), height(tree.right));
};

const superbalanced = tree => {
  if (tree === null) return true;
  return (
    Math.abs(height(tree.left) - height(tree.right)) <= 1 &&
    superbalanced(tree.left) &&
    superbalanced(tree.right)
  );
};

module.exports = { BinaryTree: BinaryTree, superbalanced: superbalanced };
