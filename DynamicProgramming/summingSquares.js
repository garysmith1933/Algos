const summingSquares = (n, memo = {}) => {
  if(n === 0) return 0;
  if(n in memo) return memo[n];
 
  let minSquares = Infinity;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    const square = i * i;
    const numSquares = 1 + summingSquares(n - square, memo);
    minSquares = Math.min(numSquares, minSquares);
  }
  
  memo[n] = minSquares;
  return memo[n];
};

// Time: O(n * sqrt(n))
// Space: O(n)
