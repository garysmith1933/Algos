def longest_streak(head):
  if head is None:
    return 0

  current = head.next
  prev = head.val
  count = 1
  max_count = 0
  
  while current is not None:
    if current.val == prev:
      count += 1
       
    else:
      max_count = max(max_count, count)
      count = 1
    
    print(count)
    prev = current.val
    current = current.next

  return max(max_count, count)

# Time: O(N) # of nodes in list
# Space: O(1) 