import { describe, expect, test } from "vitest";
import { addition, division, multiplication, substraction } from "../helpers/math.helper";

describe("addition", () => {
    test("should add two numbers", () => {
        expect(addition(1, 2)).toBe(3);
    });
    test("should add two negative numbers", () => {
        expect(addition(-1, 2)).toBe(1);
    });
});

describe("substraction", () => {
    test("should substraction two numbers", () => {
        expect(substraction(1, 2)).toBe(-1);
    });
    test("should substraction two negative numbers", () => {
        expect(substraction(-1, 2)).toBe(-3);
    });
});

describe("multiplication", () => {
    test("should multiplication two numbers", () => {
        expect(multiplication(1, 2)).toBe(2);
    });
    test("should multiplication two negative numbers", () => {
        expect(multiplication(-1, 2)).toBe(-2);
    });
});

describe("division", () => {
    test("should division two numbers", () => {
        expect(division(1, 2)).toBe(0.5);
    });
    test("should division two negative numbers", () => {
        expect(division(-1, 2)).toBe(-0.5);
    });
});

describe("division", () => {
    test("should throw an error when dividing by zero", () => {
        expect(() => division(1, 0)).toThrow("Cannot divide by zero");
    });
});
