const minimumIsland = (grid) => {
  let smallestIsland = Infinity
  const visited = new Set()
  
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      const size = islandSize(grid, r, c, visited)
      if (size > 0) {
        smallestIsland = Math.min(size, smallestIsland);
      }
    }
  }
  
  return smallestIsland;
};

const islandSize = (grid, r, c, visited) => {
  const rowInbound = 0 <= r && r < grid.length;
  const colInbound = 0 <= c && c < grid[0].length;
  
  if(!rowInbound || !colInbound) return 0;
  
  if (grid[r][c] === 'W') return 0;
    
  const pos = `${r}${c}`
  if(visited.has(pos)) return 0;
  visited.add(pos)
  
  let count = 1 
  count += islandSize(grid, r + 1, c, visited)
  count += islandSize(grid, r - 1, c, visited)
  count += islandSize(grid, r, c + 1, visited)
  count += islandSize(grid, r, c - 1, visited)
  
  return count;
}

//Time: O(rc)
//Space: O(rc)