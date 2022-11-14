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

    it("should register same pokemon", async () => {
      const newPokemon2 = fixtures.newPokemon2;
      const postRes = await req.post("/api/pokebox").send(newPokemon2);
      postRes.should.have.status(201);
      const getRes = await req.get("/api/pokebox/zapdos");
      JSON.parse(getRes.text).length.should.equal(3);
    });
  });

  describe("PATCH /api/pokebox/:id - modify poke data", () => {
    it("should modify poke data by id", async () => {
      await req.patch("/api/pokebox/5").send({ move_1: "10まんボルト" });
      const res = await req.get("/api/pokebox/zapdos");
      JSON.parse(res.text)[2].move_1.should.equal("10まんボルト");
    });
  });

  describe("DELETE /api/pokebox/ - delete poke data", () => {
    it("should delete poke data by id", async () => {
      const deleteRes = await req.delete("/api/pokebox").query({ id: 5 });
      JSON.parse(deleteRes.text)[0].id.should.equal(5);
      const getRes = await req.get("/api/pokebox");
      const data = JSON.parse(getRes.text);
      for (let i = 0; i < 4; i++) {
        data[i].id.should.equal(i + 1);
      }
    });
  });

  describe("GET /api/pokebox/pokename - return ja-en translate data", () => {
    it("should return ja-en translate data", async () => {
      const res = await req.get("/api/pokebox/pokename");
      JSON.parse(res.text)["フシギダネ"].should.equal("Bulbasaur");
      Object.keys(JSON.parse(res.text)).length.should.equal(151);
    });
  });
});
