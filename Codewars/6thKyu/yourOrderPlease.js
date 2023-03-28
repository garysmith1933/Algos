function order(words){
    const res = []
    
    words = words.split(' ')
    const nums = '123456789'
    
    for ( const word of words )  {
      for ( const char of word ) {
        if ( nums.includes(char) ) {
          //O based indexing
          res[char-1] = word;
        }    
      }
    }
    
    return res.join(' ');
  }