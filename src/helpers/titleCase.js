const titleCase = (string) => {
  const splittedString = string.split("-");
  const titleCased = splittedString.map(
    (word) => word[0].toUpperCase() + word.slice(1, word.length) + " "
  );
  return titleCased.join("");
};

export default titleCase;
