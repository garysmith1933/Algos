const fib = (n, memo = {}) => {
  if(n === 1 || n === 0) return n;
  if(n in memo) return memo[n]

  memo[n] = fib(n-1, memo) + fib(n - 2, memo)
  return memo[n];
  
};

//Time: O(n)
//Space: O(n) - recursion