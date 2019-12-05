const fs = require("fs");
const { isPassword, countPasswords } = require("./day4");

const input = fs
  .readFileSync("./4/input.txt")
  .toString()
  .trim()
  .split("-");

const start = input[0];
const end = input[1];

describe("My Solution", () => {
  it("should correctly indicate if a password is valid", () => {
    expect(isPassword(122345)).toBe(true);
    expect(isPassword(111123)).toBe(true);
    expect(isPassword(111111)).toBe(true);
    expect(isPassword(135679)).toBe(false);
    expect(isPassword(223450)).toBe(false);
    expect(isPassword(123789)).toBe(false);
  });

  it("should calculate amount of passwords matching criteria", () => {
    expect(countPasswords(start, end)).toBe(475);
  });

  it("should correctly indicate if a password is valid with additional criteria", () => {
    expect(isPassword(112233, true)).toBe(true);
    expect(isPassword(123444, true)).toBe(false);
    expect(isPassword(111122, true)).toBe(true);
    expect(isPassword(223333, true)).toBe(true);
  });

  it("should calculate amount of passwords matching additional criteria", () => {
    expect(countPasswords(start, end, true)).toBe(297);
  });
});
