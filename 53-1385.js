const findDistanceValue = (arr1, arr2, d) => {
  let flag;
  let count = 0;
  for (let i = 0; i < arr1.length; i++) {
    flag = 0;
    for (let j = 0; j < arr2.length; j++) {
      if (Math.abs(arr1[i] - arr2[j]) <= d) {
        flag = 1;
        break;
      }
    }
    if (flag === 0) {
      count++;
    }
  }

  return count;
};

const result = findDistanceValue([4, 5, 8], [10, 9, 1, 8], 2);
console.log(result);
