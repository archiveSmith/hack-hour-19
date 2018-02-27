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

function validBST(tree, queue=[]) {
	if(tree.left){
		if(tree.left.value>tree.value){
			return false;
		}
		queue.push(tree.left); 
	}
	if(tree.right){
		if(tree.right.value<tree.value{
			return false;
		}
		queue.push(tree.right);
	}
	if(queue.length>0){
		return validBST(queue[0]);
	}
	return true;
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
