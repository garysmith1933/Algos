var containsDuplicate = function(nums) {
  const visited = new Set();
  for (const num of nums) {
      if(visited.has(num)) return true;
      visited.add(num);
  }

  return false;
};

//Time: O(N) n is the max length of the nums array
//Space: O(1)