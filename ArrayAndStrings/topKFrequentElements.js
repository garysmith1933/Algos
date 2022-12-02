var topKFrequent = function(nums, k) {
  let map = {};
  let bucket = [];
  let result = [];
  
  for (let num of nums) {
    map[num] = (map[num] || 0) + 1
  }

  for (let [num, freq] of Object.entries(map)) {
    if(!bucket[freq]) {
      bucket[freq] = new Set().add(num);
    }

    else {
      bucket[freq].add(num);
    }
  }
  
    for (let i = bucket.length - 1; i >= 0; i--) {
      if (bucket[i]) result.push(...bucket[i])
      if(result.length === k) break;
    }

  return result;
};

//Time: O(N) n is length of nums array.
//Space: O(N)