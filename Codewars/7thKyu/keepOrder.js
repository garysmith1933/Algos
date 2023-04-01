function keepOrder(ary, val) {
    if (val < ary[0]) return 0;
    let prev = null
    
    for (let i = 0; i < ary.length; i++) {
      const current = ary[i]
      if (val === current) return i;
      if ( val > prev && val < current) return i;
      prev = current
    }
    
    return ary.length;
  }