const { Schema, model } = require('mongoose');

// Estrutura da tabela no banco de dados para armazenar as informações
const DevSchema = new Schema({
  devName: {
    type: String,
    required: true,
  },
  devUser: {
    type: String,
    required: true,
  },
  devBio: String,
  devAvatar: {
    type: String,
    required: true,
  },
  // devLikes: [] -> Serão varios -> Armazena o Id do usuário que deu um like
  // Se fosse devLikes: {} -> seria apenas um, e o array significa varios
  devLikes: [{
    // ID do item na coleção do mongo
    type: Schema.Types.ObjectId, 
    // Relaciona com Coleção "Deb"
    ref: 'Dev'
  }],
  devDislikes: [{
    type: Schema.Types.ObjectId, 
    ref: 'Dev'
  }],
},{
  timestamps: true,
  // Criar createdAt e updatedAt automático
});

// model()
// Nome Model -> 'DEV'
// Nome Schema 
module.exports = model('Dev', DevSchema);