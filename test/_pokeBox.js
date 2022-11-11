const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
chai.should();
const { setupServer } = require("../src/server");

const server = setupServer();
describe("pokebox API Server", () => {
  let req;
  beforeEach(() => {
    req = chai.request(server).keepOpen();
  });
  afterEach(() => {
    req.close();
  });

  describe("GET /api/pokebox/ping - test", () => {
    it("should return pong", async () => {
      const res = await req.get("/api/pokebox/ping");
      const pong = "pong";
      res.should.be.html;
      res.text.should.equal(pong);
    });
  });
});
