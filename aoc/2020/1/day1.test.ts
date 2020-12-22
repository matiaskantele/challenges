import {
  assertEquals
} from "testing/asserts.ts";

import { findEntries } from './day1.ts';

const inputStr = await Deno.readTextFile("./input.txt");
const input = inputStr.split("\n");


Deno.test("Day 1 - Part 1", () => {
  findEntries(input);
  assertEquals(3, 3);
});