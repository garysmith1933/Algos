def pair_sum(numbers, target_sum):
  
  for idx in range(len(numbers)):
    print(numbers[idx])
    next = idx + 1  
    
    while next is not len(numbers):
      # does the current number and the next number equal the target
      if numbers[idx] + numbers[next] == target_sum:
        return (idx, next)
      else:
        next += 1
    
  # Examples
  # [1,2,3,4,5], 9 => (3,4)  
  # [4,6,7,9,12] 17 => (2,4)
  
  #Time O(N*2)
  # Space (O(1))