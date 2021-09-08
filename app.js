const express = require('express');
const mongoose = require('mongoose');
const app = express();

// permitir json no express
app.use(express.json());

// pegando a model Artigo
require('./models/Artigo');
const Artigo = mongoose.model('artigo');

// conexao ao bd
mongoose
  .connect('mongodb://localhost/apiMongo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('conexao com sucesso'))
  .catch((err) => console.log('conexao falhada'));

app.get('/', (req, res) => {
  return res.json([{ titulo: 'como criar uma api' }]);
});

app.post('/artigo', (req, res) => {
  const artigo = Artigo.create(req.body, (err) => {
    if (err)
      return res.status(400).json({
        error: true,
        message: 'failed to post data',
      });

    return res.status(400).json([
      {
        error: false,
        message: 'data posted success',
      },
    ]);
  });
});

app.listen(8081, () => console.log('server running'));
