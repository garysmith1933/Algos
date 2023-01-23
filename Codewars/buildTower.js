function towerBuilder(nFloors) {
  const pyramid = [];
  
  for ( let i = 1; i <= nFloors; i++) {
    const space =  ' '.repeat(nFloors - i)
    const stars = "*".repeat(2 * i - 1)
    
    const currentFloor = `${space}${stars}${space}`
    pyramid.push(currentFloor)
  }

  return pyramid;
}