function removeParentheses(s){
  let res = '';
  const [open, close] = ['(', ')'];
  // array to keep track of parenthesis that are not closed
  const parenthesis = []

  for (const char of s) {
    //is it equal to open parenthesis
    if (char === open) {
      // if so add to () array and continue
      parenthesis.push(char)
      continue;
    }
    
    // is char equal to close 
     if (char === close) { 
      //if so remove the last element in the () array and continue;
      parenthesis.pop()
      continue;
    }
    
    // if () array is empty, add char to res
    if (!parenthesis.length) {
      res += char;
    } 
  }

  return res;
}