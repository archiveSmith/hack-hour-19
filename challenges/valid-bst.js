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

function validBST(tree, original) {
	if (!original) {
		original = tree.value;
	}
	if (tree) {
		if ( (tree.left && tree.left.value > original) || (tree.right && tree.right.value < original) ) {
			return false;
		}
	}
	if (tree.left) {
		if (validBST(tree.left, original) === false) {
			return false;
		}
	}
	if (tree.right) {
		if (validBST(tree.right, original) === false) {
			return false;
		}
	}

	return true;
}

x = new BinaryTree(10);
x.left = new BinaryTree(8);
x.left.left = new BinaryTree(6);
x.right = new BinaryTree(12);
x.left.right = new BinaryTree(9);
x.right.right = new BinaryTree(16);
//console.log(x);
console.log(validBST(x));

//module.exports = {BinaryTree: BinaryTree, validBST: validBST};
