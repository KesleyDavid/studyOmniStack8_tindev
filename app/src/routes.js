const express = require('express');

const routes = express.Router();

const DEVcontroller = require('./controllers/DevController');

// --------------------------------------------------------- GET POST PUT DELETE

routes.get('/', (req,res) => {
  let name = req.query.name || 'Fulano';
  return res.json({message:`Olá ${name}`});
});

routes.post('/devs', DEVcontroller.store);

module.exports = routes;