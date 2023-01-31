def compress(s):
  s += '!'
  left = 0
  right = 0
  res = []

  # while j does not equal the length of s
  while right < len(s):
    #if the left is the same as the right
    if (s[left] == s[right]):
      #increment the right
      right += 1
    
    #if the right is not the same as the left
    else:
      num = right - left
      if num == 1:
        res.append(s[left])
        
      else:
        #add the count and the letter to the result string
        res.append(str(num))
        res.append(s[left])
        
      #set the left pointer to the right
      left = right
      
  return ''.join(res)

# n = length of string
# Time O(n)
# Space O(n)