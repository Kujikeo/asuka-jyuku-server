"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("kanjis", {
      id_kanji: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      kanji: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Romaji: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      user_insert: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ip_insert: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      date_insert: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      time_insert: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      time_update: {
        type: Sequelize.TIME,
      },
      user_update: {
        type: Sequelize.STRING,
      },
      ip_update: {
        type: Sequelize.STRING,
      },
      date_update: {
        type: Sequelize.DATEONLY,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("kanjis");
  },
};
