def how_high(node):
  if not node:
    return -1
  
  queue = deque([ (node, 0) ])
  max_level = 0

  while queue:
    current, level = queue.popleft()
    if current.left is None and current.right is None: 
      max_level = max(max_level, level)
    
    if current.left is not None:
      queue.append( (current.left, level + 1) ) 
      
    if current.right is not None:
      queue.append( (current.right, level + 1) )
    
  return max_level
      
#Time:O(N)
#Space: O(N)