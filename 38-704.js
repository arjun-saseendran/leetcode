const search = (nums, target) => {
  const index = nums.indexOf(target);
  return index >= 0 ? index : -1;
};

const result = search([-1, 0, 3, 5, 9, 12], 9);
console.log(result);
