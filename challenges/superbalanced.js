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
  let depthOfLeaves = [];
  
  if (!root) {
    return true;
  }
  
  let nodes = [];
  nodes.push([root, 0]);

  while (nodes.length) {
    let nodePair = nodes.pop();
    let node = nodePair[0]
    depth = nodePair[1];
    

    if (!node.left && !node.right) {
      
      if (depths.indexOf(depth) < 0) {
        depths.push(depth);
        
        if ((depths.length > 2) || (depths.length === 2 && Math.abs(depths[0]- depths[1]) > 1)) {
          return false;
        }
      }
    } else {
      if (node.left) {
        nodes.push(nodes.left, depth + 1);
      }
      if (nodes.right) {
        nodes.push(nodes.right, depth + 1);
      }
    }
  } 
  return true;
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
