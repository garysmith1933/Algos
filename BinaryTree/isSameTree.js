var isSameTree = function(p, q) {
  const isPNull = p === null;
  const isQNull = q === null;
  const isBothNull = isPNull && isQNull;

  if (isBothNull) return true;
  if (isPNull|| isQNull) return false;
  if (p.val !== q.val) return false;

  const left = isSameTree(p.left, q.left)
  const right = isSameTree(p.right, q.right)

  return left && right;
};

//Time: O(N) N is # of nodes in tree;
//Space: O(N) Recursion