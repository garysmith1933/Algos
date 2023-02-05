def tree_includes(root, target):
  if root is None:
    return False
  
  if root.val == target:
    return True
  
  left = tree_includes(root.left, target)
  right = tree_includes(root.right, target)
  
  return left or right


# Time: O(N) # of nodes in tree
# Space: O(N) recursion

from collections import deque

def tree_includes(root, target):
  if root is None:
    return False
  
  queue = deque([root])
  
  while queue:
    current = queue.popleft()
    
    if current.val == target:
      return True
    
    if current.left:
      queue.append(current.left)
      
    if current.right:
      queue.append(current.right)
      
  return False

# Time: O(N) # of nodes in tree
# Space: O(N) adding to queue