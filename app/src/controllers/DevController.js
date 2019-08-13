const axios = require('axios');
const DEV = require('../models/Dev');

// controller nÃo pode ter mais do que os 5 metodos fundamentais
// INDEX - listagem
// SHOW - retornar um
// STORE - add
// UPDATE
// DELETE

module.exports = {
  async store(req, res) {
    const { username } = req.body;

    // Verifica se usuário já está cadastrado
    // Se tiver, retorna seus dados
    const userExists = await DEV.findOne({ devUser:username });
    if (userExists) {
      return res.json(userExists);
    }

    // Consultar API GitHub
    const response = await axios.get(`https://api.github.com/users/${username}`);

    // Alterar "avatar_url" para "devAvatar"
    const { name:devName, bio:devBio, avatar_url:devAvatar } = response.data;

    const dev = await DEV.create({
      devName,
      devUser:username,
      devBio,
      devAvatar
    });

    return res.json(dev);
  }
}