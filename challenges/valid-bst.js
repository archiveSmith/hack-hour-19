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

function minDepth(node) {
    if (typeof node === 'undefined') {
      return 0;
    }
    return 1 + Math.min(minDepth(node.left), minDepth(node.right));
  }
  
  function maxDepth(node) {
    if (typeof node === 'undefined') {
      return 0;
    }
    return 1 + Math.max(maxDepth(node.left), maxDepth(node.right));
  }

function validBST(tree) {
    if (typeof tree === 'undefined') {
        return undefined;
      }
      return maxDepth(tree) - minDepth(tree) <= 1;
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
