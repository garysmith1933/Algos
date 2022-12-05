var productExceptSelf = function(nums, i = 0, answers = []) {
  if (nums[i] === undefined) return answers;

  let product = 1;

  for ( let j = 0; j < nums.length; j++) {
    if (i === j) continue;
    product *= nums[j];
    if(product === 0) break;
  }

  answers.push(product);
  return productExceptSelf(nums, i + 1, answers);
};
