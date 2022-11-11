const express = require('express');

const setupServer = () => {
  const app = express();
  app.use(express.json());

  app.get('/api/pokebox/ping', (req, res) => {
    res.send('pong');
  });

  return app;
};

module.exports = { setupServer };
