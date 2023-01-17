function reverseWords(str) {
  str = str.split(' ')
 
 const reversedWords = str.map(string => {
   const word = string.split('').reverse().join('')
   return word;
  }).join(' ')
 
 return reversedWords;
}
