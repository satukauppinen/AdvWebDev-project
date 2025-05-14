const request = require("supertest");  // ✅ Import Supertest
const app = require("../app");

describe("Booking Routes Tests", () => {
  it("Should create a booking via the route", async () => {
    const res = await request(app)
      .post("/api/bookings")
      .send({
        name: "Route Test",
        email: "route@example.com",
        phone: "987654321",
        time: "2025-04-23 15:00",
        service: "Goat",
      });

    expect(res.status).toBe(201);
    expect(res.body.name).toBe("Route Test");
  });

  it("Should retrieve all bookings via the route", async () => {
    const res = await request(app).get("/api/bookings");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("Should return 400 if booking data is missing via the route", async () => {
    const res = await request(app)
      .post("/api/bookings")
      .send({ name: "Invalid Route Test" });

    expect(res.status).toBe(400);
  });
});
