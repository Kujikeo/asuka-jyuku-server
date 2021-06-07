const Dicionario = require("../models/Dicionario");
const { Op } = require("sequelize");

module.exports = {
  async cadastrar(req, res) {
    try {
      const { kanji, Romaji, descricao } = req.body;

      const [registro, registro_criado] = await Dicionario.findOrCreate({
        where: { Romaji: Romaji, kanji: kanji },
        defaults: {
          kanji,
          Romaji,
          descricao,
        },
      });

      if (!registro_criado)
        return res
          .status(400)
          .send({ erro: "Kanji já cadastrado em nosso sistema." });

      return res.json(registro);
    } catch (error) {
      const validacaoErros = {};
      console.log("teste", error);
    }
  },

  async buscar(req, res) {
    const { id_escritorio, id_usuario } = req.params;

    try {
      return res.json("heello");
    } catch (error) {
      return res.status(400).send({ erro: "Falha ao buscar advogado" });
    }
  },
  async filtrar(req, res) {
    try {
      const kanjis = await Dicionario.findAll({
        where: req.query,
      });
      return res.json(kanjis);
    } catch (error) {
      return res.status(400).send({ erro: "Falha ao filtrar kanji" });
    }
  },

  async atualizar(req, res) {
    const { id_escritorio, id_usuario } = req.params;

    try {
      return res.json("heello");
    } catch (error) {
      return res.json("heello");
    }
  },
};
