def level_averages(root):
  if root is None:
    return []
  
  from collections import deque
  
  queue = deque([(root, 1)])
  prev_level = 1
  averages = []
  same_level = []
  
  while queue:
    current, level = queue.popleft()
    if level != prev_level:
      averages.append(find_average(same_level))
      prev_level = level
      same_level = [current.val]
      
    else:
      same_level.append(current.val)
    
    if current.left is not None:
      queue.append( (current.left, level + 1) )
    
    if current.right is not None:
      queue.append( (current.right, level + 1) )
      
  averages.append(find_average(same_level))
  return averages

def find_average(list):
  print(list)
  sum = 0
  for num in list:
    sum += num
    
  return sum / len(list)

# Time: O(N)
# Space: O(N)