const getNoZeroIntegers = (n) => {
  for (let i = 1; i <= n; i++) {
    for (let j = n; j >= 1; j--) {
      if (i + j === n && !`${i}${j}`.includes("0")) {
        return [i, j];
      }
    }
  }
};

const result = getNoZeroIntegers(11);
console.log(result);
