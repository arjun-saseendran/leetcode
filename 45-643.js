const findMaxAverage = (nums, k) => {
  let maxSum = 0;

  for (let i = 0; i < k; i++) {
    maxSum += nums[i];
  }

  let currentSum = maxSum;
  for (let i = k; i < nums.length; i++) {
    currentSum += nums[i] - nums[i - k];
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }

  return maxSum / k;
};

const result = findMaxAverage([1, 12, -5, -6, 50, 3], 4);
console.log(result);
