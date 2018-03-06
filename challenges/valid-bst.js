/** You are given a tree. Write a function to check if it is a valid binary search tree.
 A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be < its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */


function BinaryTree(val) {
    this.value = val;
    this.left = null;
    this.right = null;
    return this;
}

// BinaryTree.prototype.insert = function(value) {
//   if (value <= this.value) {
//     if (!this.left) {this.left = new BinaryTree(value);}
//     else {this.left.insert(value);}
//   }
//
//   if (value > this.value) {
//     if (!this.right) {this.right = new BinaryTree(value);}
//     else {this.right.insert(value);}
//   }
// }
//
// BinaryTree.prototype.contains = function(value) {
//   if (this.value === value) {return true;}
//   if (value < this.value) {
//     if (!this.left) {return false;}
//     else {this.left.contains(value);}
//   }
//   else if (value > this.value) {
//     if (!this.value.right) return false;
//     else {return this.right.contains(value);}
//   }
// }//end .contains definition
//
// function validBST(tree) {
//   //start at the top
// }
// let a = BinaryTree(42);
// console.log(a);
// function validBST(tree) {
//   //start at the top
// }

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
