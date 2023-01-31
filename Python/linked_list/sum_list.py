def sum_list(head):
  sum = 0 
  node = head
  
  while node is not None:
    sum += node.val
    node = node.next
  
  return sum

# n = number of nodes
# Time: O(n)
# Space: O(1)