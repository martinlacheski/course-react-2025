/* eslint-disable @typescript-eslint/no-unused-vars */
import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";

// Generamos un mock para el ItemCounter

const ItemCounterMock = vi.fn((_props: unknown) => {
  return <div data-testid="ItemCounter"></div>;
});

vi.mock("./component/item-counter/ItemCounter", () => ({
  ItemCounter: (props: unknown) => ItemCounterMock(props),
}));

describe("FirstStepsApp", () => {
  test("should render the Title App", () => {
    const { container } = render(<FirstStepsApp />);
    const h1 = container.querySelector("h1");
    expect(h1?.innerHTML).toContain("Contador");
    // screen.debug();
  });

  test("should render the ItemCounter with the correct quantity", () => {
    render(<FirstStepsApp />);
    const itemCounters = screen.getAllByTestId("ItemCounter");
    expect(itemCounters.length).toBe(7);

    // screen.debug();
  });
});
