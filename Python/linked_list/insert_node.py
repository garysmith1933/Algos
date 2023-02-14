class Node:
  def __init__(self, val):
    self.val = val
    self.next = None

def insert_node(head, value, index):
  node = Node(value)
  current = head
  idx = 0
  
  if index == 0:
    node.next = current
    return node
  
  while current is not None:
    if idx + 1 == index:
      next = current.next
      current.next = node
      node.next = next
      break
    
    current = current.next
    idx += 1
    
  return head
    
# Time: O(N) # of nodes in array
# Space: O(1)