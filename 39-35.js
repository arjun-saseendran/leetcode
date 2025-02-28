const searchResult = (nums, target) => {
  const index =
    nums.findIndex((n) => n >= target) !== -1
      ? nums.findIndex((n) => n >= target)
      : nums.length;

  return index;
};

console.log(searchResult([1, 3, 5, 6], 5));
