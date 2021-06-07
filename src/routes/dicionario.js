
const express = require('express')
const routes = express.Router()
const DicionarioController = require('./../controllers/DicionarioController')

routes.post('/kanji', DicionarioController.cadastrar)
routes.put(
  '/kanji/:id_kanji',  DicionarioController.atualizar
)

routes.get('/kanjis', DicionarioController.filtrar )

module.exports = routes