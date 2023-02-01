def depth_first_values(root):
  if not root: 
    return []
  
  values = []
  stack = [root]
  
  while stack:
    current = stack.pop()
    values.append(current.val)
    
    if current.right is not None: stack.append(current.right)
    if current.left is not None: stack.append(current.left)
    
  return values

# Recurison

# def depth_first_values(root, values=[]):
#   if not root:
#     return values
  
#   values.append(root.val)
#   depth_first_values(root.left, values)
#   depth_first_values(root.right, values)
  
#   return values

# n  = number of nodes
# Time: O(N)
# Space: O(N)