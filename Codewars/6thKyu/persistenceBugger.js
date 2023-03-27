function persistence(num, count = 0) {
  if (num < 10) return count

  num = String(num)
  let product = 1
  
  for (const digit of num) {
    product *= Number(digit)
  }
  
  return persistence(product, count += 1)
}