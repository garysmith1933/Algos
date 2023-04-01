function allNonConsecutive (arr) {
    const res = []
    let expected = arr[0]
    
   for (let j = 0; j < arr.length; j++ ) {
     const num = arr[j]
   
     if (num !== expected) {
       res.push({i: j, n: num})
     }
     
     expected = num + 1
   }
    
    return res;
  }