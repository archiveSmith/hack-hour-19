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
	//console.log(tree);
	if (tree) {
		if (tree.left && tree.left.value && tree.left.value > tree.value) {
			return false;
		}
	}
	if (tree) {
		if (tree.right && tree.right.value && tree.right.value < tree.value) {
			return false;
		}
	}
	if (tree.left) {
		validBST(tree.left);
	}
	if (tree.right) {
		validBST(tree.right);
	}

	return true;
}

x = new BinaryTree(10);
x.left = new BinaryTree(8);
x.left.left = new BinaryTree(4);
x.right = new BinaryTree(70);
x.right.right = new BinaryTree(14);
//console.log(x);
//console.log(validBST(x));

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
