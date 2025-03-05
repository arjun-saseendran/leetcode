const countMatches = (items, ruleKey, ruleValue) => {
  let count = 0;
  let ruleKeys = ["type", "color", "name"];
  let keyIndex = ruleKeys.indexOf(ruleKey);
  for (let i = 0; i < items.length; i++) {
    if (items[i][keyIndex] == ruleValue) count++;
  }

  return count;
};

const result = countMatches(
  [
    ["phone", "blue", "pixel"],
    ["computer", "silver", "phone"],
    ["phone", "gold", "iphone"],
  ],
  "type",
  "phone"
);

console.log(result);
