var twoSum = function(nums, target) {
  const sums = {};

  for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      const otherNum = target - num;

      if(otherNum in sums) return [ sums[otherNum], i ];

      sums[num] = i;
  }
};

//Time: O(N) n is the length of the nums array
//Space: O(N) 