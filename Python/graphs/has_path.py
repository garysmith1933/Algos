def has_path(graph, src, dst):
  if src == dst:
    return True
  
  for neighbor in graph[src]:
    if has_path(graph, neighbor, dst) == True:
      return True
    
  return False
      
# Time: O(e) # of edges(neighbors) in graph
# Space: O(N)