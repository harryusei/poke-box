const express = require("express");
const path = require("path");
const model = require("./model");

const setupServer = () => {
  const app = express();
  app.use(express.json());
  app.use(express.static(path.resolve(__dirname, "../public")));

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

  app.patch("/api/pokebox/:id", (req, res) => {
    model
      .update(req.params.id, req.body)
      .then((poke) => {
        res.send(poke);
      })
      .catch((err) => {
        console.error(err);
      });
  });

  app.delete("/api/pokebox", (req, res) => {
    model
      .delete(req.query.id)
      .then((poke) => {
        res.send(poke);
      })
      .catch((err) => {
        console.error(err);
      });
  });

  return app;
};

module.exports = { setupServer };
