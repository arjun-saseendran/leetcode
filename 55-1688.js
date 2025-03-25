

const numberOfMatches = (n) => {
  let count = 0;
  let reverse = 0;
  while(n > 1){
    reverse = Math.floor(n/2);
    count++;
    n = n - reverse
  }
  
  return count;
}

const result = numberOfMatches(7);

console.log(result);