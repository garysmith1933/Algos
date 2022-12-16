 //Breadth first
// var maxDepth = function(root) {
//     if (!root) return 0;
//     const queue = [{node: root, level: 1}]

//     while (queue.length > 0) {
//       const { node, level } = queue.shift()

//       if(node.left) queue.push({node: node.left, level: level + 1});
//       if(node.right) queue.push({node: node.right, level: level + 1});

//       if (queue.length === 0) return level;
//     }
// };

// //Time: O(N) n is # of nodes in tree;
// //Space: O(N)


//Depth First

var maxDepth = function(root) {
  if (!root) return 0;

  let maxLevel = 1;

  const stack = [{node: root, level: 1}]

  while (stack.length > 0) {
    const { node, level } = stack.pop();

    maxLevel = Math.max(maxLevel, level)

    if(node.left) stack.push({node: node.left, level: level + 1});
    if(node.right) stack.push({node: node.right, level: level + 1});
  }

  return maxLevel;
};

//Time: O(N)
//Space: O(N)