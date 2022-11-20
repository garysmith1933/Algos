const connectedComponentsCount = (graph) => {
  let count = 0;
  const visited = new Set()
  
  for (const node in graph) {
    if (explore(node, graph, visited) === true) {
      count++
    }
  }
  
  return count
};

const explore = (node, graph, visited) => {
  if (visited.has(String(node))) return false;
  visited.add(String(node))
  
  for (const neighbor of graph[node]) {
    explore(neighbor, graph, visited)
  }
  
  return true;
}

//Time: O(E) number of edges
//Space: O(N) number of nodes