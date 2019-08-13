const DEV = require('../models/Dev');

module.exports = {
  // http://localhost:3333/devs/5d5229ed2ea8f4702efdcddd/likes
  // POST -> /devs:devId/likes'
  // Dev logado
  // Abre listagem de devs
  // Procura user com o id
  // Faz o Like
  async store(req, res) {
    //  console.log(req.params.devId);
    //  console.log(req.headers.user);

    const { devId } = req.params;
    const { user } = req.headers;

    // Usuário Logado
    // findById -> buscar por ID
    const loggedDev = await DEV.findById(user);
    // Usuário a ser dado o like/dislike
    const targetDev = await DEV.findById(devId);

    // Guardam a instancia do usuário com todas suas informações

    if (!targetDev) {
      // Se o usuario que estou querendo dar like/dislike não existir
      // 400 bad request -> alguma informação enviada não está correta
      return res.status(400).json({error: 'Dev not exists'});
    }
    
    // Add userId dentro do usuário a ser dado like/dislike no array "devLikes"
    loggedDev.devDislikes.push(targetDev._id);

    await loggedDev.save();

   return res.json(loggedDev);
  }
}