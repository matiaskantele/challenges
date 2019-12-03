const fs = require("fs");
const {
  findClosestIntersection,
  findFewestStepsToIntersection,
} = require("./day3");

const input = fs
  .readFileSync("./3/input.txt")
  .toString()
  .split("\n");

const firstWire = input[0];
const secondWire = input[1];

describe("My solution", () => {
  it("should find the distance to the closest intersection points of the two wires", () => {
    expect(findClosestIntersection("R8,U5,L5,D3", "U7,R6,D4,L4")).toBe(6);
    expect(
      findClosestIntersection(
        "R75,D30,R83,U83,L12,D49,R71,U7,L72",
        "U62,R66,U55,R34,D71,R55,D58,R83"
      )
    ).toBe(159);
    expect(
      findClosestIntersection(
        "R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51",
        "U98,R91,D20,R16,D67,R40,U7,R15,U6,R7"
      )
    ).toBe(135);
  });

  it("should find the manhattan distance from the central port to the closest intersection", () => {
    expect(findClosestIntersection(firstWire, secondWire)).toBe(768);
  });

  it("should find the fewest combined steps the wires must take to reach an intersection", () => {
    expect(findFewestStepsToIntersection("R8,U5,L5,D3", "U7,R6,D4,L4")).toBe(
      30
    );
    expect(
      findFewestStepsToIntersection(
        "R75,D30,R83,U83,L12,D49,R71,U7,L72",
        "U62,R66,U55,R34,D71,R55,D58,R83"
      )
    ).toBe(610);
    expect(
      findFewestStepsToIntersection(
        "R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51",
        "U98,R91,D20,R16,D67,R40,U7,R15,U6,R7"
      )
    ).toBe(410);
    expect(findFewestStepsToIntersection(firstWire, secondWire)).toBe(8684);
  });
});
