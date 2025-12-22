import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";

describe("ItemCounter", () => {
  test("should render the ItemCounter Name.", () => {
    const name = "Harina";
    const quantity = 1;
    render(<ItemCounter name={name} quantity={quantity} />);
    expect(screen.getByText(name)).toBeDefined();
    expect(screen.getByText(quantity)).toBeDefined();
  });

  test("should render the ItemCounter Quantity.", () => {
    const name = "Tomate";
    const quantity = 8;
    render(<ItemCounter name={name} quantity={quantity} />);
    expect(screen.getByText(name)).toBeDefined();
    expect(screen.getByText(quantity)).toBeDefined();
  });

  test("Should increment the quantity.", () => {
    const name = "Harina";
    const quantity = 10;
    render(<ItemCounter name={name} quantity={quantity} />);
    const buttonIncrement = screen.getByText("+1");
    fireEvent.click(buttonIncrement);
    expect(screen.getByText("11")).toBeDefined();
  });

  test("Should decrement the quantity.", () => {
    const name = "Harina";
    const quantity = 10;
    render(<ItemCounter name={name} quantity={quantity} />);
    const buttonDecrement = screen.getByText("-1");
    fireEvent.click(buttonDecrement);
    expect(screen.getByText("9")).toBeDefined();
  });

  test("Should change to red color when quantity is 1.", () => {
    const name = "Harina";
    const quantity = 1;
    render(<ItemCounter name={name} quantity={quantity} />);
    const itemText = screen.getByText(name);
    expect(itemText.style.color).toBe("red");
    // screen.debug();
  });

  test("Should change to black color when quantity is great than 1.", () => {
    const name = "Harina";
    const quantity = 2;
    render(<ItemCounter name={name} quantity={quantity} />);
    const itemText = screen.getByText(name);
    expect(itemText.style.color).toBe("black");
    // screen.debug();
  });
});
