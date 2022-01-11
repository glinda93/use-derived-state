import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import TestComponent from "./component";

test("useDerivedState", async () => {
  render(<TestComponent />);
  const label = screen.queryByTestId("testState");
  expect(label).toBeTruthy();
  expect(label!.textContent).toBe("Parent Foo");
  const btnUpdateChildState = screen.queryByTestId("testUpdateChildState");
  fireEvent.click(btnUpdateChildState!);
  expect(label!.textContent).toBe("Child Bar");
  const btnUpdateParentState = screen.queryByTestId("testUpdateParentState");
  fireEvent.click(btnUpdateParentState!);
  expect(label!.textContent).toBe("Parent Bar");
});
