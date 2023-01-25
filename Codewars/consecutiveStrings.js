function longestConsec(arr, k) {
  if ( k > arr.length ) return "";
  if ( k <= 0 ) return "";
  
  let left = 0;
  let longestStr = '';
  
  for ( let right = k; right <= arr.length; right++ ) {
    let str = arr.slice(left, right).join('')
    longestStr = str.length > longestStr.length ? str : longestStr
    left++
  }
  
  return longestStr
}