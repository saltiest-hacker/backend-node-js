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
  it("should post user to /register", async () => {
    await request(server).post("/api/register").send({
      username: "timbo",
      password: "prostofire",
    });

    const users = await db("users");
    expect(users).toHaveLength(2);
  });
});
