const express = require('express');
const { decodeYaml } = require('./decode-yaml');
const { createOrder } = require('./events');

const app = express();

const server = app.listen(3030, () => {
  const { subscribers, publishers } = decodeYaml();
  console.log(`Server listening in port 3030, config: `, { subscribers, publishers });

  createOrder("AB232545A");
});

server.on('error', (error) => {
  console.log(`Failed to error: ${error}`);
});

server.on('request', (req, res) => {
  console.log(`Event to request`);
});
