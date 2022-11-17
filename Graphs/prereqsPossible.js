const prereqsPossible = (numCourses, prereqs) => {
  // todo
  const graph = createGraph(prereqs)
  
  const visited = new Set()
  
  for (const startingNode in graph) {
    if(coursesCompleted(graph, startingNode, visited) === false) return false;
  }
  
  return true;
};

const coursesCompleted = (graph, node, visited) => {
  if(visited.has(node)) return false;
  visited.add(node)
  
  for (const neighor of graph[node]) {
    if(coursesCompleted(graph, neighor, visited) === false) return false;
  }
  
  visited.delete(node)
  return true;
}

const createGraph = (prereqs) => {
  const graph = {}
  
  for (const prereq of prereqs) {
    const [course1, course2] = prereq
    if(!graph[course1]) graph[course1] = [];
    if(!graph[course2]) graph[course2] = [];
    
    graph[course1].push(course2)
  }
  
  return graph;
}

//Time: O(N + P) N is the number of courses, P is the number of prereqs
//Space: O(N)