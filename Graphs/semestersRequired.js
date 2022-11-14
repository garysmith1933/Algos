const semestersRequired = (numCourses, prereqs) => {
  // todo
 if(prereqs.length === 0) return 1
 const graph = createGraph(numCourses, prereqs)
 let distance = {}
 //0:[5] - returns 2
 //1:[2] - returns 3
 //2:[4] - returns 2
 // 3:[5] - returns 2 
 // 4:[] - returns 1 
 // 5:[] - returns 1 
 
 // the goal here is to determine what are the last courses to make the later traversal easier.
 for (let course in graph) {
   //if the course has no neighbors, its the last course needed to be completed.
   if(graph[course].length === 0) distance[course] = 1;
 }
  
  for(let course in graph) {
    traverseDistance(graph, course, distance)
  }
  
  //returns the max number fron the arrays of values in the distance object
  // [2,3,2,2,1,1] - return 3.
  return Math.max(...Object.values(distance))
};

const traverseDistance = (graph, node, distance) => {
  //if we already visited the node, return how many semesters needed to complete it.
  if (node in distance) return distance[node];
  
  let maxDistance = 0
  for (let neighbor of graph[node]) {
    const neighborDistance = traverseDistance(graph, neighbor, distance)
    maxDistance = Math.max(maxDistance, neighborDistance)
  }
  
  distance[node] = maxDistance + 1
  return distance[node]
}

const createGraph = (numCourses, prereqs) => {
  const graph = {}
   
  for(let prereq of prereqs) {
    const [course1, course2] = prereq;
   
    if(!graph[course1]) graph[course1] = []
    if(!graph[course2]) graph[course2] = []
    graph[course1].push(course2)
  }
    
  return graph
}

// Time: O(p) P is the number of prerequisites
// Space: O(c) - C is the number of courses