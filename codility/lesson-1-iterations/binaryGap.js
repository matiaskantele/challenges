// solution for https://app.codility.com/programmers/lessons/1-iterations/binary_gap/
const solution = number => {
  let gap = false;
  let currentGap = 0;
  let longestGap = 0;

  const binaryString = number.toString(2);
  const chars = binaryString.split("");

  chars.map(c => {
    if (c === "1") {
      if (!gap) {
        gap = true;
      } else {
        if (currentGap > longestGap) {
          longestGap = currentGap;
        }
        gap = false;
        currentGap = 0;
      }
    } else {
      if (gap) {
        currentGap++;
      }
    }
  });

  return longestGap;
};

// extra fancy solution which is likely slower because of regex matching
const oneliner = number =>
  number.toString(2).match(/(1[0]+1)\1*/g)
    ? number
        .toString(2)
        .match(/(1[0]+1)\1*/g)
        .sort((a, b) => b.length - a.length)[0].length - 2
    : 0;

module.exports = {
  solution,
  oneliner
};
