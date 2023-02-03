def reverse_list(head):
  current = head
  prev = None
  while current is not None:
    #store the next node to a variable
    next = current.next
    # change the nodes next pointer to equal the previous pointer
    current.next = prev
     # change the previous pointer to our current node
    prev = current
    # change current pointer to next
    current = next 

  # current would be null, so we need to return prev value as the new head
  return prev

# none <- 1 <- 2 <- 3 <- 4 <- 5 = 5 4 3 2 1
# 3 8 9 4 5 = 5 4 9 3 8

#Time: O(N) # of nodes in linked list
#Space: O(1) # not storing anything.