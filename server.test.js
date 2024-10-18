const request = require("supertest");
const app = require("./server");

describe("Calculator API", () => {
  test("should calculate sum for valid input", async () => {
    const response = await request(app)
      .post("/calculate")
      .send({ numbers: "1,2,3" });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ result: 6 });
  });

  test("should handle empty string", async () => {
    const response = await request(app)
      .post("/calculate")
      .send({ numbers: "" });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ result: 0 });
  });

  test("should return error for negative numbers", async () => {
    const response = await request(app)
      .post("/calculate")
      .send({ numbers: "-1,2,-3" });

    expect(response.status).toBe(400);
    expect(response.body.error).toContain("negative numbers not allowed");
  });
});
