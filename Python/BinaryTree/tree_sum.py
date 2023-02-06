def tree_sum(root, sum = 0):
  if not root: 
    return sum

  stack = [root]
  
  while stack:
    current = stack.pop()
    
    sum += current.val
    
    if current.left:
      stack.append(current.left)
      
    if current.right:
      stack.append(current.right)
  
  return sum

  # Time: O(N) # of nodes
  # Space: O(N) adding to stack