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

function validate(tree){
  let left = true;
  let right = true;
  
  if(tree.left){
    if(tree.left.value > tree.value){
      return false
    }
    left = validate(tree.left)
  }
  if(tree.right){
    if(tree.right.value < tree.value){
      return false
    }
    right = validate(tree.right)
  }
  return (left && right)
}

function highest(tree){
  if(tree.right){
    return highest(tree.right)
  }

  return tree.value
}

function lowest(tree){
  if(tree.left){
    return lowest(tree.left)
  }

  return tree.value
}

function validBST(tree) {
  console.log(tree.value)
  if(!tree.left && !tree.right){ return true }
  if(!validate(tree)){
    return false
  }
  
  let largest_left = (tree.left ? highest(tree.left) : (tree.value -1));
  let smallest_right = (tree.right ? lowest(tree.right) : (tree.value+1));

  if(largest_left > tree.value){ return false }
  if(smallest_right < tree.value ){ return false }

  if(tree.right && tree.left)   return (validBST(tree.left) && validBST(tree.right))
  if(tree.right && !tree.left) return (validBST(tree.right))
  if(!tree.right && tree.left) return (validBST(tree.left))
   
}



module.exports = {BinaryTree: BinaryTree, validBST: validBST};
