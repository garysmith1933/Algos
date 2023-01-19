var search = function(nums, target) {
  const half = Math.floor(nums.length/2)
  const middleNum = nums[half]
  const isHigher = target > middleNum;

  if (isHigher) {
      for ( let i = half; i < nums.length; i++) {
        const num = nums[i]
        if (num === target) return i;
      }

      return -1;
  } 
  
  else {
      for (let i = 0; i < half; i++) {
        const num = nums[i]
        if (num === target) return i;
      }

      return -1;
  }  
};

//Time O(log N)
//Space: O(1)