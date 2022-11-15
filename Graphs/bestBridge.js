const bestBridge = (grid) => {
  let mainIsland
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
        const potentialIsland = exploreIsland(grid, r, c, new Set())
        if(potentialIsland.size > 0) {
          mainIsland = potentialIsland;
          break;
        }
      }  
    }
  
  const visited = new Set(mainIsland)
  const queue = [];
  for (let coordinate of mainIsland) {
    const [row, col ] = coordinate.split(',').map(Number)
    queue.push([row, col, 0])
  }
  
  while(queue.length > 0) {
    const [ row, col, distance ] = queue.shift();
    const coordinate = `${row},${col}`;

    if(grid[row][col] === 'L' && !mainIsland.has(coordinate)) {
      return distance - 1;
    }
  
    const deltas = [[1,0], [-1,0], [0,1], [0,-1]]
    for (let delta of deltas) {
      const [deltaRow, deltaCol] = delta;
      const neighborRow = row + deltaRow;
      const neighborCol = col + deltaCol;
      const neighborCoordinate = `${neighborRow},${neighborCol}`
      if(isInbounds(grid, neighborRow, neighborCol) && !visited.has(neighborCoordinate)) {
        visited.add(neighborCoordinate)
        queue.push([neighborRow, neighborCol, distance + 1]);
      }
    }
  }
};

const isInbounds = (grid, row, col) => {
  const rowInbounds = 0 <= row && row < grid.length;
  const colInbounds = 0 <= col && col < grid[0].length;
  return rowInbounds && colInbounds
}

const exploreIsland = (grid, row, col, visited) => {

  if(!isInbounds(grid, row, col) || grid[row][col] === 'W') return visited;
  //is a water?
  
  const coordinate = `${row},${col}`
  if(visited.has(coordinate)) return visited
  
  visited.add(coordinate)
  
  exploreIsland(grid, row - 1, col, visited)
  exploreIsland(grid, row + 1, col, visited)
  exploreIsland(grid, row, col - 1, visited)
  exploreIsland(grid, row, col + 1, visited)
  
  return visited;
}

//Time: O(r*c) 
//Space: O(r*c)