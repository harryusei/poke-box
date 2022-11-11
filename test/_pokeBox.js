const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
chai.should();
const { setupServer } = require("../src/server");
const fixtures = require("./fixtures");

const server = setupServer();
describe("pokebox API Server", () => {
  let req;
  let pokeBox;

  before(() => {
    pokeBox = JSON.parse(JSON.stringify(fixtures.initPokeBox));
  });
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

  describe("GET /api/pokebox - get all pokemon", () => {
    it("should return all pokemon", async () => {
      const res = await req.get("/api/pokebox");
      JSON.parse(res.text).should.deep.equal(pokeBox);
    });
  });

  describe("GET /api/pokebox/:species - get pokemon by species", () => {
    it("should return specific pokemon", async () => {
      const res = await req.get("/api/pokebox/zapdos");
      const zapdos = pokeBox.filter((poke) => poke.species_en === "Zapdos");
      JSON.parse(res.text).should.deep.equal(zapdos);
    });
  });

  describe("POST /api/pokebox - register new pokemon", () => {
    it("should register new pokemon", async () => {
      const newPokemon = fixtures.newPokemon;
      const postRes = await req.post("/api/pokebox").send(newPokemon);
      postRes.should.have.status(201);
      const dragonite = fixtures.registeredPokemon;
      const getRes = await req.get("/api/pokebox/dragonite");
      JSON.parse(getRes.text)[0].should.deep.equal(dragonite);
    });
  });
});
