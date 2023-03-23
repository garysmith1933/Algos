function findOutlier(integers){
  const odds = [];
  const evens = [];
  
  for (let num of integers) {
    if (num % 2 === 0) {
      evens.push(num)
    }
    
    else {
      odds.push(num)
    }
  }
  
  return odds.length < evens.length ? odds[0] : evens[0]
}