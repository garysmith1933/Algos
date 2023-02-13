def tree_min_value(root):
  if not root:
    return float("inf")
  
  left = tree_min_value(root.left)
  right = tree_min_value(root.right)
  
  return min(root.val, left, right)

# Time: O(N) # of nodes in tree
# Space: O(N) recursion