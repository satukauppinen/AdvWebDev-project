import { render, screen } from "@testing-library/react";
import ViewBookings from "../src/components/admin/ViewBookings";

test("renders booked times table correctly", () => {
  const mockBookings = [
    { time: "2025-04-21 09:00", name: "Test User", email: "test@example.com", phone: "123456789", service: "Sheep" }
  ];

  render(<ViewBookings bookings={mockBookings} />);

  expect(screen.getByText("2025-04-21 09:00")).toBeInTheDocument();
  expect(screen.getByText("Test User")).toBeInTheDocument();
  expect(screen.getByText("test@example.com")).toBeInTheDocument();
  expect(screen.getByText("123456789")).toBeInTheDocument();
  expect(screen.getByText("Sheep")).toBeInTheDocument();
});
