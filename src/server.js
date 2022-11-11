const express = require("express");
// const config = require("../knexfile");
// const knex = require("knex")(config);
const model = require("./model");
// const POKE_TABLE = model.POKE_TABLE;

const setupServer = () => {
  const app = express();
  app.use(express.json());

  app.get("/api/pokebox/ping", (req, res) => {
    res.send("pong");
  });

  app.get("/api/pokebox", (req, res) => {
    model
      .getAll()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.error(err);
      });
  });

  app.get("/api/pokebox/:species", (req, res) => {
    model
      .getBySpecies(req.params.species)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.error(err);
      });
  });

  app.post("/api/pokebox", (req, res) => {
    model
      .register(req.body)
      .then((registeredPoke) => {
        res.status(201).json(registeredPoke);
      })
      .catch((err) => {
        console.error(err);
      });
  });
  return app;
};

module.exports = { setupServer };
