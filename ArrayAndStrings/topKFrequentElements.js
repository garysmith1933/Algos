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
  
  //start backwards and add the values to the results array until the length of it is equal to k.
  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) result.push(...bucket[i])
    if(result.length === k) break;
  }

  return result;
};

//Time: O(N) n is length of nums array.
//Space: O(N)

//The goal of this is to create an array that represents the # times a number shows up, with the values of the array being the number(s) that shows up x amount of times.

//example: a bucket that represents numbers that have appeared 3 times in the array would only have 1 in it as it is the only number to so.