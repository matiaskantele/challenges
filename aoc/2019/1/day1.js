// --- Day 1: The Tyranny of the Rocket Equation ---
const fuelRequirementForMass = mass => Math.floor(mass / 3) - 2;

const sumOfFuelRequirements = input =>
  input.reduce((acc, m) => acc + fuelRequirementForMass(m), 0);

// -- Part Two ---
const calculateTotalFuelForMass = mass => {
  const fuelRequirement = fuelRequirementForMass(mass);
  if (fuelRequirement <= 0) return 0;
  return fuelRequirement + calculateTotalFuelForMass(fuelRequirement);
};

const sumOfFuelRequirementsWithFuelForFuel = input =>
  input.reduce((acc, m) => acc + calculateTotalFuelForMass(m), 0);

module.exports = {
  fuelRequirementForMass,
  sumOfFuelRequirements,
  calculateTotalFuelForMass,
  sumOfFuelRequirementsWithFuelForFuel,
};
