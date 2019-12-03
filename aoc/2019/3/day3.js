// https://adventofcode.com/2019/day/3

// --- Day 3: Crossed Wires ---
const visitedLocations = wire => {
  const locations = [];
  const moves = wire.split(",");
  let steps = 0;
  const currentLocation = { x: 0, y: 0 };
  moves.map(m => {
    const direction = m.charAt(0);
    const distance = m.substring(1);
    for (let i = 0; i < distance; i++) {
      switch (direction) {
        case "U":
          currentLocation.y += 1;
          break;
        case "R":
          currentLocation.x += 1;
          break;
        case "D":
          currentLocation.y -= 1;
          break;
        case "L":
          currentLocation.x -= 1;
          break;
      }
      steps += 1;
      locations.push({ ...currentLocation, steps: steps });
    }
  });
  return locations;
};

const findIntersections = (wireOnePath, wireTwoPath) => {
  return wireOnePath.filter(w1Coords => {
    return wireTwoPath.find(
      w2Coords => w1Coords.x === w2Coords.x && w1Coords.y === w2Coords.y
    );
  });
};

const calculateManhattanDistance = intersection =>
  Math.abs(intersection.x) + Math.abs(intersection.y);

const findClosest = intersections => {
  let closestDistanceFound = 0;
  let closestIntersection = {};
  intersections.map(i => {
    const distance = calculateManhattanDistance(i);
    if (!closestDistanceFound || distance < closestDistanceFound) {
      closestDistanceFound = distance;
      closestIntersection = { ...i };
    }
  });
  return closestIntersection;
};

const findClosestIntersection = (wireOne, wireTwo) => {
  const wireOnePath = visitedLocations(wireOne);
  const wireTwoPath = visitedLocations(wireTwo);
  const intersections = findIntersections(wireOnePath, wireTwoPath);
  const closestIntersection = findClosest(intersections);
  const distance = calculateManhattanDistance(closestIntersection);
  return distance;
};

// --- Part Two ---

module.exports = {
  findClosestIntersection,
};
