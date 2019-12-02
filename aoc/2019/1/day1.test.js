const fs = require("fs");
const {
  fuelRequirementForMass,
  sumOfFuelRequirements,
  calculateTotalFuelForMass,
  sumOfFuelRequirementsWithFuelForFuel,
} = require("./day1");

const input = fs
  .readFileSync("./1/input.txt")
  .toString()
  .split("\n")
  .map(s => s.replace(/\r$/, ""))
  .filter(s => s.length > 0);

describe("My solution", () => {
  it("should be calculated correctly based on the mass of the module", () => {
    expect(fuelRequirementForMass(12)).toBe(2);
    expect(fuelRequirementForMass(14)).toBe(2);
    expect(fuelRequirementForMass(1969)).toBe(654);
    expect(fuelRequirementForMass(100756)).toBe(33583);
  });

  it("should be summed up correctly for all of the modules", () => {
    expect(sumOfFuelRequirements(input)).toBe(3317970);
  });

  it("should calculate total fuel for mass with fuel for fuel taken into account", () => {
    expect(calculateTotalFuelForMass(14)).toBe(2);
    expect(calculateTotalFuelForMass(1969)).toBe(966);
    expect(calculateTotalFuelForMass(100756)).toBe(50346);
  });

  it("should be summed up correctly for all of the modules with fuel for fuel taken into account", () => {
    expect(sumOfFuelRequirementsWithFuelForFuel(input)).toBe(4974073);
  });
});
