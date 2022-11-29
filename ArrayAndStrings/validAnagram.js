var isAnagram = function(s, t) {
  const count = {};

  for (let char of s) {
    if (!count[char]) visited[char] = 0;
    count[char]++;
  }

  for (let char of t) {
    if (!count[char]) return false;
    count[char]--;
  }

  for (const char in visited) {
    if (count[char] !== 0) return false;
  }

  return true;
};

//Time O(n + m) length of both strings
//Space O(n) we store every letter of the first string in the object