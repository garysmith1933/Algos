var isSubtree = function(root, subRoot) {
  if (!root) return false;

  const queue = [ root ];

  while (queue.length > 0) {
    const node = queue.shift();

    if(node.val === subRoot.val) {
      if (possibleSubTree(node, subRoot) === true) return true;
    }

    if(node.right) queue.push(node.right);
    if(node.left) queue.push(node.left);
  }

  return false;
};

const possibleSubTree = (node, subRoot) => {
  if (node === null && subRoot === null) return true;

  const isNull = node === null || subRoot === null;
  if (isNull) return false;

  const notSameValue = node.val !== subRoot.val;
  if (notSameValue) return false;

  const left = possibleSubTree(node.left, subRoot.left);
  const right = possibleSubTree(node.right, subRoot.right);

  return left && right;
}

//Time: O(N) # of nodes in root tree
//Space: O(N) recursion