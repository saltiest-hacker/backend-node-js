const request = require("supertest");
const server = require("./server");

describe("testing the api", () => {
  it("api endpoint response is text", () => {
    return request(server)
      .get("/api")
      .then((res) => {
        expect(res.type).toBe("text/html");
      });
  });
});
