//Write a function, longestPath, that takes in an adjacency list for a directed acyclic graph. 
//The function should return the length of the longest path within the graph. 
//A path may start and end at any two nodes. 
//The length of a path is considered the number of edges in the path, not the number of nodes.

const longestPath = (graph) => {
  const visited = new Set()
  let maxLength = -Infinity
 
  for (const sourceNode in graph) {
    for (const neighbor of graph[sourceNode]) {
      const length = findPath(graph, neighbor, visited, 1)
      maxLength = Math.max(maxLength, length)
    }
  }
  
  return maxLength;
};

const findPath = (graph, sourceNode, visited, length) => {
  if (visited.has(sourceNode)) return length;
  visited.add(sourceNode)
 
  let longestLength = length
  for (const neighbor of graph[sourceNode]) {
    const currentLength = findPath(graph, neighbor, visited, length + 1)
    longestLength = Math.max(longestLength, currentLength)
  }
  
  return longestLength;
}

//e = number of edges
//n = number of nodes
//Time O(e*n)
//Space O(n)