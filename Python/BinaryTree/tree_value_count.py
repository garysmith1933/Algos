def tree_value_count(root, target):
  if root == None:
    return 0
  
  match = 1 if root.val == target else 0
  
  left = tree_value_count(root.left, target)
  right = tree_value_count(root.right, target)
  
  return match + left + right

#Time: O(N)
#Space: O(N)
