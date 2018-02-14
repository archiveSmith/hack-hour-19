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
    const queue = [tree];
    
    while (queue.length > 0) {
        let root = queue.shift();
        if (root.left && root.value < root.left.value) return false;
        if (root.right && root.value > root.right.value) return false;
        if (root.left && root.value > root.left.value) queue.push(root.left);
        if (root.right && root.value < root.right.value) queue.push(root.right);
    }

    return true;
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
