const areaOfMaxDiagonal = (dimensions) => {
  let maxLength = 0;
  let maxArea = 0;
  for (let i = 0; i < dimensions.length; i++) {
    let length = dimensions[i][0];
    let width = dimensions[i][1];
    let diagonal = Math.sqrt(length ** 2 + width ** 2);
    if (
      diagonal > maxLength ||
      (diagonal === maxLength && length * width > maxArea)
    ) {
      maxLength = diagonal;
      maxArea = length * width;
    }
  }
  return maxArea;
};

const result = areaOfMaxDiagonal([
  [4, 10],
  [4, 9],
  [9, 3],
  [10, 8],
]);
console.log(result);
