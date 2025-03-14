


const maximumOddBinaryNumber = (s) => {
  s = s.split('').sort((a, b) => b - a);
  s.shift();
  s.push(1);
  return s.join('');
}

let result = maximumOddBinaryNumber("010")
console.log(result);