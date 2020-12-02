// https://adventofcode.com/2019/day/5
// --- Day 5: Sunny with a Chance of Asteroids ---

const runIntcode = input => {
  const array = input.split(",").map(c => parseInt(c));
  for (let i = 0; i < array.length; i += 4) {
    switch (array[i]) {
      case 99:
        return array.join(",");
      case 1:
        array[array[i + 3]] = array[array[i + 1]] + array[array[i + 2]];
        break;
      case 2:
        array[array[i + 3]] = array[array[i + 1]] * array[array[i + 2]];
        break;
      default:
        console.log("Unexpected opcode. Skipping...");
    }
  }
};

const initializeState = (input, noun, verb) => {
  const array = input.split(",");
  array[1] = noun;
  array[2] = verb;
  return array.join(",");
};

const runGravityAssistProgram = (input, noun = 12, verb = 2) => {
  const inputWithRestoredState = initializeState(input, noun, verb);
  const result = runIntcode(inputWithRestoredState);
  return parseInt(result.split(",")[0]);
};

// -- Part Two ---
const findNounAndVerbForResult = (originalInput, result) => {
  let input = originalInput;
  for (let i = 0; i < 100; i++) {
    for (let k = 0; k < 100; k++) {
      if (runGravityAssistProgram(input, i, k) === result) {
        return 100 * i + k;
      }
      input = originalInput;
    }
  }
};

module.exports = {
  runIntcode,
  runGravityAssistProgram,
  findNounAndVerbForResult,
};
