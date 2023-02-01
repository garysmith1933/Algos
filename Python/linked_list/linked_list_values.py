def linked_list_values(head):
  node = head
  res = []
  
  while node is not None: 
    res.append(node.val)
    node = node.next
    
  return res

#recursion
def linked_list_values(head, values=[]):
  if head is None:
    return values
  
  values.append(head.val)
  linked_list_values(head.next, values)
  
  return values


# n = number of nodes
# Time O(N)
# Space O(N) recursion / creating our output