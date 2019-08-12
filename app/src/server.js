const express = require('express');

const server = express();

// Routes
// GET POST PUT DELETE
server.get('/', (req,res) => {
  // Parametros URL
  let name = req.query.name || 'Fulano';

  return res.json({message:`Olá ${name}`});
  //return res.send(`Hello ${name}`);
});

server.listen(3333);