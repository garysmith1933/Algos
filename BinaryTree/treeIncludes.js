const treeIncludes = (root, target) => {
  if(!root) return false
  if(root.val === target) return true;
  
  return treeIncludes(root.left,target) || treeIncludes(root.right,target)
};

//Time: O(N) n is the number of nodes in the tree
//Space: O(N) recursion
