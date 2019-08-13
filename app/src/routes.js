const express = require('express');

const routes = express.Router();

// --------------------------------------------------------- GET POST PUT DELETE

routes.get('/', (req,res) => {
  let name = req.query.name || 'Fulano';
  return res.json({message:`Olá ${name}`});
});

routes.post('/devs', (req,res) => {
  console.log(req.body);
  return res.json({message: req.body});
});

module.exports = routes;