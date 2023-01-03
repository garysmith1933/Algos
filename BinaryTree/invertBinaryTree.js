var invertTree = function(root) {
  if(root === null) return null;
  let queue = [root];

  while (queue.length > 0) {
    let current = queue.shift();
    current = swap(current);

    if(current.right !== null) queue.push(current.right);
    if(current.left !== null) queue.push(current.left);
  }

  return root;
};

const swap = (node) => {
let temp = node.right;
node.right = node.left;
node.left = temp;
return node;
}

//Time: O(N) # of nodes in tree
//Space: O(N)