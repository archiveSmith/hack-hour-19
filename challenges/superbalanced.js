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

function superbalanced(tree) {
  if (!tree) return true;

  function superHelper(tree) {
    let leftH = 1;
    let rightH = 1;

    if (tree.left) {
      leftH = superHelper(tree.left);
      if (!leftH) return false;
      leftH ++;
    }

    if (tree.right) {
      rightH = superHelper(tree.right);
      if (!rightH) return false;
      rightH ++;
    }

    if (Math.abs(leftH - rightH) > 1)return false;
    return Math.max(leftH, rightH);
  }

  return (!!superHelper(tree));

}


function balanceTests() {
  let x = new BinaryTree();
  let l = new BinaryTree();
  let r = new BinaryTree();
  let ll = new BinaryTree();
  let lr = new BinaryTree();
  let rl = new BinaryTree();
  let rr = new BinaryTree();
  let lll = new BinaryTree();
  let llr = new BinaryTree();
  let lrl = new BinaryTree();
  let lrr = new BinaryTree();
  let llll = new BinaryTree();
  let rlr = new BinaryTree();

  console.log('true', superbalanced());
  console.log('true', superbalanced(x));
  x.left = l;
  console.log('true', superbalanced(x));
  l.left = ll;
  console.log('false', superbalanced(x));
  x.right = r;
  console.log('true', superbalanced(x));
  r.left = rl;
  console.log('true', superbalanced(x));
  l.right = lr;
  console.log('true', superbalanced(x));
  ll.left = lll;
  console.log('true', superbalanced(x));
  rl.right = rlr;
  console.log('false', superbalanced(x));
  r.right = rr;
  console.log('true', superbalanced(x));
  lll.left = llll;
  console.log('false', superbalanced(x));
}

//balanceTests();

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
