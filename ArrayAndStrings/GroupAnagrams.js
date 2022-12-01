var groupAnagrams = function(strs, results = []) {
  if (!strs.length) return results;

  if (strs.length === 1) {
      results.push(strs);
      return results;
  }

  const currentAnagrams = [ strs[0] ];
  const leftoverWords = [];
  
  for (let i = 1; i <= strs.length-1; i++) {
      const word = strs[i];

      if(isAnagram(word, createMap(strs[0])) === true) {
          currentAnagrams.push(word);
      }

      else {
          leftoverWords.push(word);
      }
  }

  results.push(currentAnagrams);
  return groupAnagrams(leftoverWords, results);
};

const isAnagram = (word, map) => {
  for (const char of word) {
      if (!map[char]) return false;
      map[char]--;
  }

  for (const char in map) {
      if (map[char] !== 0) return false;
  }

  return true;
}

const createMap = (string) => {
  const map = {};

  for (let i = 0; i < string.length; i++) {
      const char = string[i];
      if(!map[char]) map[char] = 0;
      map[char]++;
  }

  return map;
}
//Time: O(N)
//Space: O(N)

//This passes 111/188 tests on Leetcode, current problem is when the input is too high, it runs out of memory. Will update this later