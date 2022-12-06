var longestConsecutive = function(nums) {
  const set = new Set(nums)
  let longestSeq = 0;

  for (let num of nums) {
    //is it the beginning of a sequence
    if (!set.has(num - 1)) {
      let length = 0;
    
    //we count up and check if the next number is found in the set. if so, it the sequence is still going
      while (set.has(num + length)) {
        length++
      }

      longestSeq = Math.max(longestSeq, length)
    }
  }

  return longestSeq;
};

//Time: O(N) size of nums array
//Space: O(N) 