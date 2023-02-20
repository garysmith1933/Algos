def get_node_value(head, index):
  # if head is empty return node
  if not head:
    return None
  
  node = head
  idx = 0
  
  # while node is not none
  while node: 
     #if current idx is equal to index we are supposed to find return the nodes value
    if idx == index:
      return node.val
    
    # move to next node, and increment idx by 1
    node = node.next
    idx += 1
    
  # if we break out of the loop, the index is more than the length of the list, 
  # return none
  return None
  
# Time O(N) # of nodes in list
# Space O(1)