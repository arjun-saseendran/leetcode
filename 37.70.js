

const stair = (n) => {
  
  if (n <= 3) return n;
  let pre1 = 3;
  let pre2 = 2;
  let cur;
  for (let i = 3; i <n; i++){
  cur = pre2 + pre1;
    pre2 = pre1;
    pre1 = cur
  }
  return cur;
}

const result = stair(5);
console.log(result);
