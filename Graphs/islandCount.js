const islandCount = (grid) => {
  const visited = new Set()
  let islandCount = 0;
  
  for (let r = 0; r < grid.length; r++) {
    for ( let c = 0; c < grid[0].length; c++) {
      if(exploreIsland(grid, r, c, visited) === true) {
        islandCount++
      }
    }
  }
  
  return islandCount;
};

const exploreIsland = (grid, r, c, visited) => {
  //is it greater than or equal to 0 and less than the length of the grid.
  const rowInbounds = 0 <= r && r < grid.length;
  //is it greater than or equal to 0 and less than the length of the row.
  const colInbounds = 0 <= c && c < grid[0].length

  if(!rowInbounds || !colInbounds) return false;
  
  //is it water or land
  if (grid[r][c] === 'W') return false;

  const coordinate = `${r},${c}`
  
  if(visited.has(coordinate)) return false;
  visited.add(coordinate)
  
  exploreIsland(grid, r, c-1, visited)
  exploreIsland(grid, r, c+1, visited)
  exploreIsland(grid, r-1, c, visited)
  exploreIsland(grid, r+1, c, visited)
  
  return true; 
}

//Time: O(rc) r is the number of arrays in the grid, c is the length of each array
//Space: O(rc)