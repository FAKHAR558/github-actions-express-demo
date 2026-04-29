const request = require("supertest");
const app = require("../src/app");

describe("Express App Routes", () => {
  test("GET / should return demo message", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("GitHub Actions Express demo is running");
  });

  test("GET /health should return OK status", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("SUCCESS");
  });
});