function longestRepetition(s) {
  if (!s.length) return ["",0];
  
  let consecChar = null
  let consecLength = 0
  
  let currentCount = 0
  let prev = null
  let current = null
  
  for (let i = 0; i < s.length; i++) {
    current = s[i]
    console.log(current, prev, currentCount)
    
    if (current === prev) {
      currentCount++
      continue;
    }
    
    //if we have a new consec char
    if (currentCount > consecLength) {
      consecChar = prev
      consecLength = currentCount
      currentCount = 0;
    }
    
    //need to reset counter if the current count was not greater than the leading count
    else {
      currentCount = 0
    }
    
    prev = current;
    currentCount++
  }
  
  //out of loop
  console.log(current, currentCount)
   if (currentCount > consecLength) {
     
      consecChar = current
      consecLength = currentCount
    }
  
  return [consecChar, consecLength]
}
