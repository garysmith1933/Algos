def linked_list_find(head, target):
  node = head
  while node is not None:
    if node.val == target: return True
    node = node.next
  
  return False

# n is number of nodes in the list
# Time O(N) 
# Time O(1)