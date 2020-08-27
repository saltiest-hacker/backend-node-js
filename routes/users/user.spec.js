const request = require("supertest");
const server = require("../../api/server");

describe("get /users", () => {
  it("should not GET users without token", async () => {
    const res = await request(server).get("/api/users");
    expect(res.status).toBe(401);
  });
});
