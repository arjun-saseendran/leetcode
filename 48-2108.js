


const firstPalindrome = (words) => {
  for (let i = 0; i < words.length; i++) {
    if (words[i] === words[i].split('').reverse().join('')) return words[i];
  }
  return '';
}
const result = firstPalindrome(["abc","car","ada","racecar","cool"]);
console.log(result);
