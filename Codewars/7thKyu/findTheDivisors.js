function divisors(integer) {
  let i = 2
  const res = [];

  while (i !== integer) {
    if ( integer % i === 0 ) {
      res.push(i)
    }
    
    i++
  }
  
  return !res.length ? `${integer} is prime` : res
};