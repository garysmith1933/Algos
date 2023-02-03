def pair_product(numbers, target_product):
  import math
  prev_nums = {}
  
  for i in range(len(numbers)):
    num = numbers[i]
    other_num = target_product / num
    if other_num in prev_nums:
      return (prev_nums[other_num], i)
    
    else:
      prev_nums[num] = i

# Time : O(N)
# Space: O(N)