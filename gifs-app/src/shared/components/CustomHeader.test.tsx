import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { CustomHeader } from "./CustomHeader";

describe("CustomHeader", () => {
  test("debe de mostrar el titulo correctamente", () => {
    const title = "Test Title";
    render(<CustomHeader title={title} />);
    expect(screen.getByText(title)).toBeDefined();
  });

  test("Debe de mostrar la descripcion cuando se proporciona", () => {
    const title = "Test Title";
    const description = "Test Description";
    render(<CustomHeader title={title} description={description} />);
    expect(screen.getByText(description)).toBeDefined();
  });
});
