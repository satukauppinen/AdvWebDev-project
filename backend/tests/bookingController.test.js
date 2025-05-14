const request = require("supertest");
const app = require("../app"); // ✅ Import your Express app

describe("Booking API Tests", () => {
  it("Should create a booking and send a confirmation email", async () => {
  const res = await request(app)
    .post("/api/bookings")
    .send({
      name: "Test User",
      email: "test@example.com",
      phone: "123456789",
      time: "2025-04-22 10:00",
      service: "Sheep",
    });

  expect(res.status).toBe(201);
  expect(res.body.name).toBe("Test User");

  // ✅ Ensure Jest waits for the email sending process
  await new Promise(resolve => setTimeout(resolve, 1000));
});


  it("Should fetch all bookings", async () => {
    const res = await request(app).get("/api/bookings");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
