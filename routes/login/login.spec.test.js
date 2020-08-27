const request = require("supertest");
const server = require("../../api/server");
const db = require("../../data/dbConfig");

describe("users router testing", () => {
  beforeEach(async () => {
    await db("users").truncate();
    await request(server).post("/api/register").send({
      username: "unique",
      password: "pass",
    });
  });
  it("should post user to /login", async () => {
    const res = await request(server).post("/api/login").send({
      username: "unique",
      password: "pass",
    });
    expect(res.status).toBe(200);
  });
});
