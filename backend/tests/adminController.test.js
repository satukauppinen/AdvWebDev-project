const request = require("supertest");
const app = require("../app"); // ✅ Import your Express app

describe("Admin Authentication Tests", () => {
  it("Should log in successfully", async () => {
    const res = await request(app)
      .post("/api/admin/login")
      .send({ username: "testi", password: "testi" });

    expect(res.status).toBe(200);
    expect(res.body.token).toBeDefined();
  });

  it("Should reject login with wrong credentials", async () => {
    const res = await request(app)
      .post("/api/admin/login")
      .send({ username: "testi", password: "wrongpassword" });

    expect(res.status).toBe(401);
  });
});
