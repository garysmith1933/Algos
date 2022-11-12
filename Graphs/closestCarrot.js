//Write a function, closestCarrot, that takes in a grid, a starting row, and a starting column. 
//In the grid, 'X's are walls, 'O's are open spaces, and 'C's are carrots. The function should return a number representing the length of the shortest path from the starting position to a carrot. 
//You may move up, down, left, or right, but cannot pass through walls (X). If there is no possible path to a carrot, then return -1.


const closestCarrot = (grid, startRow, startCol) => { 
  const queue = [[startRow, startCol, 0]]
  const visited = new Set([`${startRow},${startCol}`]);

  while (queue.length > 0) {
    const [r, c, distance] = queue.shift()
    if(grid[r][c] === 'C') return distance;
    //an array of arrays used to get the coordinates for the positions down, up, right and left. In that order.
    const neighborCoordinates = [[1,0], [-1, 0], [0,1], [0, -1] ]
    //iterate over neighborCoordinates, taking the row and col from each neighbor and add it to the queue if its a valid coordinate;
    for (const neighbor of neighborCoordinates) {
      const [newRow, newCol] = neighbor
      const neighborRow = r + newRow
      const neighborCol = c + newCol
      const neighborPos = `${neighborRow},${neighborCol}`;
      //Is it a valid input?
      const rowInbounds = 0 <= neighborRow && neighborRow < grid.length;
      const colInbounds = 0 <= neighborCol && neighborCol < grid[0].length;
      
      //if neighbor position is a valid input in the graph, has not been visited and is not a wall
      if (rowInbounds && colInbounds && !visited.has(neighborPos) && grid[neighborRow][neighborCol] !== 'X') {
        //add to the set
        visited.add(neighborPos);
        //add to the queue
        queue.push([ neighborRow, neighborCol, distance + 1 ]);
      }
    } 
  }
  return -1;
};
