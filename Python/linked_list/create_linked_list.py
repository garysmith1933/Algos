class Node:
  def __init__(self, val):
    self.val = val
    self.next = None

def create_linked_list(values, idx = 0):
  if idx == len(values): 
    return None
  
  head = Node(values[idx])
  head.next = create_linked_list(values, idx + 1)
  
  return head


# Time: O(N) length of values
# Space O(N) recursion