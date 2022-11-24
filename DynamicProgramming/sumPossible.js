const sumPossible = (amount, numbers, memo = {}) => {
  //if the amount is 0 we dont have to take anything away so we can return true;
  if(amount === 0) return true;
  
  //its not possible to make the amount with a negative number.
  if(amount < 0) return false;
  
  //we dont want to repeat work we have already done, if its in the memo. 
  //we already found out theres no way to get to 0 from there
  if(amount in memo) return memo[amount];
  
  //each iteration we subtract the current number from the numbers array, if we can reach 0, its true.
  for(let num of numbers) {
    if(sumPossible(amount - num, numbers, memo) === true) {
      memo[amount] = true;
      return true;
    }
  }
  
  memo[amount] = false;
  return false;
};

//Time: O(a * n) a being the amount, n being the length of the numbers array
//Space: O(a) we recursively keep subracting from the amount unitl it either hits 0, or goes below it.
