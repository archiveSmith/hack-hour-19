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

    if (tree.this.value === null) {
        return false;
    }
    let current = this.value
    while (current) {
        if (this.left > this.value && this.left !== null) {
            return false
        } else if (this.right < this.value && this.right !== null) {
            return false
        } else if (this.left < this.value && this.right > this.value) {
            current = this.left
        }
    }

}

module.exports = { BinaryTree: BinaryTree, validBST: validBST };



