// https://adventofcode.com/2019/day/4
// --- Day 4: Secure Container ---

const countOccurrences = array => {
  // this fancy version is borrowed from https://code-examples.net/en/q/567c30
  return array.reduce(
    (prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev),
    {}
  );
};

const hasSingleDuplicate = array => {
  const occurrences = countOccurrences(array);
  if (Object.values(occurrences).find(n => n === "3")) return false;
  return Object.values(occurrences).filter(n => n === 2).length > 0;
};

const isPassword = (number, partTwo) => {
  const array = number.toString().split("");
  let hasDuplicate = false;
  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] > array[i]) {
      return false;
    }
    if (array[i - 1] === array[i]) {
      hasDuplicate = true;
    }
  }

  return partTwo ? hasSingleDuplicate(array) : hasDuplicate;
};

// --- Part Two --- included
const countPasswords = (start, end, isPartTwo = false) => {
  const passwords = [];
  for (let i = start; i <= end; i++) {
    if (isPassword(i, isPartTwo)) passwords.push(i);
  }
  return passwords.length;
};

module.exports = {
  isPassword,
  countPasswords,
};
