const app = require("../src/index");
const nock = require("nock");
const request = require("supertest");

test("get Chuck Norris joke", async () => {
  const mockResponse = {
    type: "success",
    value: {
      id: 268,
      joke: "He who lives by the sword, dies by the sword. He who lives by Chuck Norris, dies by the roundhouse kick.",
      categories: [],
    },
  };

  // intercept every HTTP call from http://api.icndb.com
  nock("http://api.icndb.com").get("/jokes/random").reply(200, mockResponse);
  const res = await request(app).get("/jokes");
  expect(res.status).toBe(200);
  expect(res.body).toEqual(mockResponse);
});

// test("Test post", () => {
//   nock("http://www.example.com")
//     .post("/login", "username=pgte&password=123456")
//     .reply(200, { id: "123ABC" });

//   nock("http://www.example.com")
//     .post("/login", (body) => body.username && body.password)
//     .reply(200, { id: "123ABC" });
// });

// test('should get query', () => {
//     nock("http://example.com").get("/users?foo=bar").reply(200);

//     nock("http://example.com")
//       .get("/users")
//       .query({ name: "pedro", surname: "teixeira" })
//       .reply(200, { results: [{ id: "pgte" }] });
// })

// test('should accept headers', () => {
//     const scope = nock("http://www.example.com", {
//       reqheaders: {
//         authorization: "Basic Auth",
//       },
//     })
//       .get("/")
//       .reply(200);
// })


