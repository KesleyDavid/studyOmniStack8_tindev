const express = require('express');

const routes = express.Router();

// --------------------------------------------------------- GET POST PUT DELETE

// http://localhost:3333/?name=Kesley
routes.get('/', (req,res) => {
  // Parametros URL
  let name = req.query.name || 'Fulano';

  //return res.send(`Hello ${name}`);
  return res.json({message:`Olá ${name}`});
});

routes.post('/devs', (req,res) => {
  console.log(req.body);

  return res.json({message: req.body});
});
// Exportar alguma informação
module.exports = routes;