function getSum( a,b ) {
  if (a === b) return a;

  let sum = 0;
  let min = Math.min(a,b);
  const max = Math.max(a,b);
  
  while (min <= max) {
    sum += min;
    min++;
  }

  return sum;
}
  