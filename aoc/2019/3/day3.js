// https://adventofcode.com/2019/day/3
// --- Day 3: Crossed Wires ---

const generateCoordinates = moves => {
  const coordinates = [];
  const coordinate = { x: 0, y: 0 };
  let steps = 0; // for part two
  moves.map(move => {
    const direction = move.charAt(0);
    const distance = move.substring(1);
    for (let i = 0; i < distance; i++) {
      switch (direction) {
        case "U":
          coordinate.y += 1;
          break;
        case "R":
          coordinate.x += 1;
          break;
        case "D":
          coordinate.y -= 1;
          break;
        case "L":
          coordinate.x -= 1;
          break;
      }
      steps += 1;
      coordinates.push({ ...coordinate, steps: steps });
    }
  });
  return coordinates;
};

const asListOfCoordinates = wire => {
  const moves = wire.split(",");
  return generateCoordinates(moves);
};

const findIntersections = (firstWirePoints, secondWirePoints) => {
  return firstWirePoints.filter(fwPoint => {
    return secondWirePoints.find(
      swPoint => fwPoint.x === swPoint.x && fwPoint.y === swPoint.y
    );
  });
};

const calculateManhattanDistance = coordinate =>
  Math.abs(coordinate.x) + Math.abs(coordinate.y);

const findClosest = intersections => {
  let closest = 0;
  let closestIntersection = {};
  intersections.map(coordinates => {
    const distance = calculateManhattanDistance(coordinates);
    if (!closest || distance < closest) {
      closest = distance;
      closestIntersection = { ...coordinates };
    }
  });
  return closestIntersection;
};

const findClosestIntersection = (firstWire, secondWire) => {
  const firstWirePoints = asListOfCoordinates(firstWire);
  const secondWirePoints = asListOfCoordinates(secondWire);
  const intersections = findIntersections(firstWirePoints, secondWirePoints);
  const closestIntersection = findClosest(intersections);
  return calculateManhattanDistance(closestIntersection);
};

// --- Part Two ---
const findFewestCombinedSteps = (firstWirePoints, secondWirePoints) => {
  let fewestSteps = 0;
  firstWirePoints.map(fwPoint => {
    const intersection = secondWirePoints.find(
      swPoint => fwPoint.x === swPoint.x && fwPoint.y === swPoint.y
    );
    if (intersection) {
      const steps = fwPoint.steps + intersection.steps;
      if (!fewestSteps || steps < fewestSteps) {
        fewestSteps = steps;
      }
    }
  });
  return fewestSteps;
};

const findFewestStepsToIntersection = (firstWire, secondWire) => {
  const firstWirePoints = asListOfCoordinates(firstWire);
  const secondWirePoints = asListOfCoordinates(secondWire);
  return findFewestCombinedSteps(firstWirePoints, secondWirePoints);
};

module.exports = {
  findClosestIntersection,
  findFewestStepsToIntersection,
};
