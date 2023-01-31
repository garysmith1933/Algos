def uncompress(s):
  i = 0
  j = 0
  numbers = '0123456789'
  result = []
  
  while j != len(s):
    if s[j] in numbers:
      j += 1
      
    else:
      num = int(s[i:j])
      result.append(s[j] * num)
      j += 1
      i = j
    
    
  return ''.join(result)

#Time: O(N * M) N is number of number char combinations, M is the highest number found
#Space O(N * M)