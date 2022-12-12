var isValid = function(s) {

  const brackets = {
    ")" : "(",
    "}" : "{",
    "]" : "["
  };
  
  const stack = [];

  for (let current of s) {
    if ( current in brackets ) {
      if ( brackets[current] !== stack[stack.length - 1] ) return false;

      stack.pop()
    }

    else {
      stack.push(current);
    }
  }

  return stack.length === 0;
};

//Time: O(N)
//Space: O(N)