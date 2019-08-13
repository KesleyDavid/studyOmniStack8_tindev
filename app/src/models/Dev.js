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
  }
},{
  timestamps: true,
  // Criar createdAt e updatedAt automático
});

// model()
// Nome Model -> 'DEV'
// Nome Schema 
module.exports = model('Dev', DevSchema);