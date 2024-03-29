function isValidWalk(walk) {
  // if walk is less 10 or greater than 10 return false
  if (walk.length < 10 || walk.length > 10) return false;
 
  const opposites = {
    'w': 'e',
    'e': 'w',
    'n': 's',
    's': 'n'
  }
  
  // array that tracks where are are going / ended up
  const currentDirections = [];

  for (let direction of walk) {
    // can the opposite of the current direction be found inside the array - (ARE WE BACKTRACKING?)
    const backtrack = opposites[direction]
    
    if ( currentDirections.includes(backtrack) ) {
      //get rid of the most recent appearence of the opposite of the current direction
      const idx = currentDirections.indexOf(backtrack)
      currentDirections.splice(idx, 1);
    }
  
    else {
      // that means we are moving in a direction that we have not gone yet, push to array
      currentDirections.push(direction);
    }
  }

  //if the array that keeps our direcitons is 0, that means we ended back where we started.
  return currentDirections.length === 0;
}