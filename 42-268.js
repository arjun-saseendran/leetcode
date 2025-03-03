const missingNumber = (arr) => {
  const sortedArr = arr.sort((a, b) => a - b);
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] !== i) {
      return i;
    } else if (sortedArr[i] === i && i === sortedArr.length - 1) {
      return i + 1;
    }
  }
};

missingNumber([0, 1]);
