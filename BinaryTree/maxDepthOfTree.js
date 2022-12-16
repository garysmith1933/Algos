var maxDepth = function(root) {
    if (!root) return 0;
    const queue = [{node: root, level: 1}]

    while (queue.length > 0) {
      const { node, level } = queue.shift()

      if(node.left) queue.push({node: node.left, level: level + 1});
      if(node.right) queue.push({node: node.right, level: level + 1});

      if (queue.length === 0) return level;
    }
};

//Time: O(N) n is # of nodes in tree;
//Space: O(N)