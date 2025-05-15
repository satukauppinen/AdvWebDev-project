import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SetAvailability from "../src/components/admin/SetAvailability";

test("adds available time correctly", () => {
  render(<SetAvailability token="test-token" />);

  const input = screen.getByDisplayValue(""); // ✅ Finds an empty datetime-local field
 // ✅ Selects the datetime picker by its associated label
 // Assuming the input is a text field
  const button = screen.getByText("Save");

  fireEvent.change(input, { target: { value: "2025-04-21T14:00" } });
  fireEvent.click(button);

  expect(screen.getByText("2025-04-21T14:00")).toBeInTheDocument();
});

