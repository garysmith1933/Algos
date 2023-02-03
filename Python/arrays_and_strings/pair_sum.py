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

  def pair_sum2(numbers, target_sum):
  # dict
    prev_nums = {}
    # iterate over numbers
    for idx in range(len(numbers)):
      current_num = numbers[idx]
      # other half = target - value of current numbers
      other_half = target_sum - current_num
      # if its in our dict
      if other_half in prev_nums:
        #RETURN TUPLE 
        return (prev_nums[other_half], idx)
    
      #else
      else:
        # add to dictionary with key as other half, value as current idx
        prev_nums[current_num] = idx
      
  #Time O(N)
  # Space (O(N))