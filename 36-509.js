
const fib = (n) => {
  let first = 0;
  let second = 1;
  let temp;
  for (let i = 0; i < n; i++) {
    temp = first;
    first = second;
    second = temp + second;
  }
  return first;
};

const result = fib(4);
console.log(result);
