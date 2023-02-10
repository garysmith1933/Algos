def is_univalue_list(head):
  current = head
  val = head.val
  
  while current is not None:
    if current.val != val:
      return False
    
    current = current.next
    
  return True

# Time: O(N)
# Space: O(1)