var maxArea = function(height) {
  let result = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right ) {
    //the area of a rectangle is width * height, in this case the 
    //minimum height between the two points
    let area = (right - left) * Math.min(height[left],height[right]);
    result = Math.max(result, area);

    if(height[left] < height[right]) {
      left++;
    }

    else {
      right--;
    }
  }

return result;
};

//Time: O(N)
//Space: O(1)