
const hammingWeight = (n) => {
  const binary = n.toString(2);
  const arr = binary.split("");
  const sum = arr.reduce((acc, num) => acc + Number(num), 0);
  return sum;
};

const result = hammingWeight(11);
console.log(result);
