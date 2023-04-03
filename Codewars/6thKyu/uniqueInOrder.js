var uniqueInOrder=function(iterable){
    if (!iterable) return [];
    let prev = null
    const res = []
  
    for (const current of iterable) {
      if (current !== prev) {
        res.push(current)
      }
      prev = current;
    }
    
    return res;
  }
  