const hammingWeight = (n) => {
  return n
    .toString(2)
    .split("")
    .reduce((ac, ele) => ac + Number(ele), 0);
};

const result = hammingWeight(128);

console.log(result);
