// --- Day 1: The Tyranny of the Rocket Equation ---
const fuelRequirementForMass = mass => Math.floor(mass / 3) - 2;

const sumOfFuelRequirements = input =>
  input.map(m => fuelRequirementForMass(m)).reduce((acc, f) => acc + f);

// -- Part Two ---
const calculateTotalFuelForMass = mass => {
  const fuelRequirement = fuelRequirementForMass(mass);
  if (fuelRequirement <= 0) return 0;
  return fuelRequirement + calculateTotalFuelForMass(fuelRequirement);
};

const sumOfFuelRequirementsWithFuelForFuel = input =>
  input.map(m => calculateTotalFuelForMass(m)).reduce((acc, f) => acc + f);

module.exports = {
  fuelRequirementForMass,
  sumOfFuelRequirements,
  calculateTotalFuelForMass,
  sumOfFuelRequirementsWithFuelForFuel,
};
