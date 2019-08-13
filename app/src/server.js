const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const server = express();

// mongodb+srv://kdfsoftware:<password>@cluster0-7wpct.mongodb.net/test?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://kdfsoftware:kdfSoftware@cluster0-7wpct.mongodb.net/omnistack8?retryWrites=true&w=majority',{
  useNewUrlParser: true
});

// Avisar Express que os dados serão
server.use(express.json());
server.use(routes);

server.listen(3333);