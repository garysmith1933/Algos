def intersection(a, b):
  intersected = []
  set_of_a = set(a)
  
  for num in b:
    if num in set_of_a:
      intersected.append(num)
      
  return intersected

#Time: O(N + M) N = Length of a, M = length of b
#Space: O(N)