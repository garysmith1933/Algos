const nonAdjacentSum = (nums, memo = {}) => {
  let maxSum = 0;
    
  for (let i = 0; i < nums.length; i++) {
    const sum = findSum(nums, i, memo);
    maxSum = Math.max(maxSum, sum);
  };
  
  return maxSum;
};

const findSum = (nums, idx, memo) => {
  if(idx in memo) return memo[idx];
  if(idx >= nums.length) return 0;

  memo[idx] = nums[idx];

  for (let i = idx + 2; i < nums.length; i++) {
    memo[idx] = Math.max(nums[idx] + findSum(nums, i, memo), memo[idx]);
  }
  
  return memo[idx];
}

//Time: O(N) - im not sure on this just yet but n is the length of the array.
//Space: O(N) 
