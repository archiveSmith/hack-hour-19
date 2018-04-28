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

function validBST(tree, min, max) {
  if (min === undefined) min = Number.NEGATIVE_INFINITY;
  if (max === undefined) max = Number.POSITIVE_INFINITY;

  // console.log(tree.value);
  // console.log('max', max);

  if (tree.left) {
    if (tree.left.value > tree.value) return false;
    if (tree.left.value < min) return false;
    let tempMax = max;
    if (tree.value < max) tempMax = tree.value;
    if (!validBST(tree.left, min, tempMax)) return false;
  }
  if (tree.right) {
    //console.log('max', max);
    if (tree.right.value < tree.value) return false;
    //console.log('right', tree.value)
    if (tree.right.value > max) return false;
    //console.log('right', tree.value)
    let tempMin = min
    if (tree.value > min) tempMin = tree.value;
    //console.log('right', tree.value)
    if (!validBST(tree.right, tempMin, max)) return false;
  }
  return true;
}

function tests() {

  let vals = [1, 2, 3, 4, 5, 4, 7, 8, 9];

  // tree nodes in order of val
  let lll =  new BinaryTree(vals[0]);
  let ll =  new BinaryTree(vals[1]);
  let l =  new BinaryTree(vals[2]);
  let lr =  new BinaryTree(vals[3]);
  let bst = new BinaryTree(vals[4]);
  let rl =  new BinaryTree(vals[5])
  let r =  new BinaryTree(vals[6])
  let rr =  new BinaryTree(vals[7])
  let rrr =  new BinaryTree(vals[8])

  bst.left = l;
  bst.right = r;
  l.left = ll;
  l.right = lr;
  ll.left = lll;
  r.left = rl;
  r.right = rr;
  rr.right = rrr;

  console.log(validBST(bst));

}

//tests();

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
