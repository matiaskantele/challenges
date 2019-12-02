const fs = require("fs");
const {
  runIntcode,
  runGravityAssistProgram,
  findNounAndVerbForResult,
} = require("./day2");

const input = fs.readFileSync("./2/input.txt").toString();

describe("My solution", () => {
  it("should handle opcode 1 (add) instructions correctly", () => {
    expect(runIntcode("1,0,0,0,99")).toBe("2,0,0,0,99");
    expect(runIntcode("1,1,1,4,99,5,6,0,99")).toBe("30,1,1,4,2,5,6,0,99");
  });

  it("should handle opcode 2 (multiply) instructions correctly", () => {
    expect(runIntcode("2,3,0,3,99")).toBe("2,3,0,6,99");
    expect(runIntcode("2,4,4,5,99,0")).toBe("2,4,4,5,99,9801");
  });

  it("should calculate Intcode outcome correctly based on resulting value at address 0", () => {
    expect(runGravityAssistProgram(input)).toBe(4023471);
  });

  it("should find the correct input noun and verb to produce the result 19690720", () => {
    expect(findNounAndVerbForResult(input, 19690720)).toBe(8051);
  });
});
