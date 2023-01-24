function alphabetPosition(text) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  
  let results = [];
  
  for ( const char of text ) {
    const pos = alphabet.indexOf(char.toLowerCase()) 
    const inAlphabet = pos >= 0
    if (inAlphabet) results.push(pos + 1)
  }
  return results.join(' ');
}