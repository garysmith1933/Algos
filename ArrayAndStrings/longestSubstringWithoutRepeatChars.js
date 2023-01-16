var lengthOfLongestSubstring = function(s) {
  const duplicates = new Set();
  let left = 0;
  let max = 0;
 
  for (let right = 0; right < s.length; right++) {
    while (duplicates.has(s[right])) {
      duplicates.delete(s[left]);
      left++
    }
 
    duplicates.add(s[right]);
    max = Math.max(duplicates.size, max)
  }
 
  return max;
 };
 
 //Time: O(N) length of string.
 //Space: O(N) at worst, all the letters are unique and get added to the set.