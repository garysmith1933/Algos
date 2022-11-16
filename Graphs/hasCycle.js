const hasCycle = (graph) => {
  const visited = new Set();
  
  for (const node in graph) {
    for (const neighbor of graph[node]) {
      visited.add(node);
      if(potentialCycle(graph, neighbor, visited, new Set()) === true) return true;
    }
  }
  
  return false;
};

const potentialCycle = (graph, currentNode, visited, neighborNodesVisited) => {
  if(visited.has(currentNode) || neighborNodesVisited.has(currentNode)) return true;  
  if(!graph[currentNode].length) return false;
  neighborNodesVisited.add(currentNode)
  
  for (const neighbor of graph[currentNode]) {
    if(potentialCycle(graph, neighbor, visited, neighborNodesVisited) === true) return true;
  }
  
  return false;
}

//Time:  I think its O(N * M) N = #number of nodes, M = Max length of a nodes neighbors. Will update if im incorrect.
//Space: O(N)



