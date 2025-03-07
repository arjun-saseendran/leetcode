const capitalizeTitle = (title) => {
  title = title.toLowerCase();
  return title
    .split(" ")
    .map((word) => {
      if (word.length <= 2) {
        return word.toLowerCase();
      } else {
        return word[0].toUpperCase() + word.slice(1);
      }
    })
    .join(" ");
};

const result = capitalizeTitle("capiTalIze tHe titLe");
console.log(result);
