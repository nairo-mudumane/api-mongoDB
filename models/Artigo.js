const mongoose = require('mongoose');
const Artigo = new mongoose.Schema(
  {
    titulo: {
      type: String,
      required: true,
    },
    conteudo: {
      type: String,
      required: true,
    },
  },
  // criando o createdAtt automaticamente
  {
    timestamps: true,
  }
);

// exportando a model
mongoose.model('artigo', Artigo);
