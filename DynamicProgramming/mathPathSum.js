const maxPathSum = (grid, r = 0, c = 0, memo = {}) => {
  const pos = `${r},${c}`;
  if(pos in memo) return memo[pos];

  //if its not valid return 0
  if(r === grid.length || c === grid[0].length) return 0;
  //if we reached the end, return the last number
  if(r === grid.length - 1 && c === grid[0].length-1) return grid[r][c];

  const down = maxPathSum(grid, r + 1, c, memo);
  const right = maxPathSum(grid, r, c + 1, memo);
  
  memo[pos] = grid[r][c] + Math.max(down, right);
  return memo[pos];

};

//Time: O(r*c) r = number of rows, c = length of a given rows
//Space: 0(r*c)
