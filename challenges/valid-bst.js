/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be < its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */
 

function BinaryTree(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

function validBST(tree) {
  if (!tree) return false;
  // console.log('Tree value:', tree.value);
  let leftValid = true, rightValid = true;
  if (tree.left) {
    if (tree.left.value > tree.value) {
      // console.log('Tree left value:', tree.left.value);
      // console.log('Invalid left value - returning false');
      return false;
    }
    // console.log('Checking left branch');
    leftValid = validBST(tree.left);
  }
  if (tree.right) {
    if (tree.right.value < tree.value) {
      // console.log('Tree right value:', tree.right.value);
      // console.log('Invalid right value - returning false');
      return false;
    }
    // console.log('Checking right branch');
    rightValid = validBST(tree.right); 
  }
  return leftValid && rightValid;
}

// const bst = new BinaryTree(3);
// bst.left = new BinaryTree(2);
// bst.right = new BinaryTree(5);
// bst.right.left = new BinaryTree(8);
// bst.right.right = new BinaryTree(7);
// console.log(bst);
// console.log(validBST(bst));

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
