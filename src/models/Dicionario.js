const { Model, DataTypes, Sequelize } = require("sequelize");
const auditoriaController = require("./../controllers/AuditoriaController");

class Dicionario extends Model {
  static init(connection) {
    super.init(
      {
        id_kanji: {
          type: DataTypes.UUID,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        kanji: {
          type: DataTypes.UUID + " CHARSET utf8 COLLATE utf8_general_ci",
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "Esse campo não pode ser vazio",
            },
            notNull: {
              msg: "Esse campo precisa ser informado",
            },
          },
        },
        Romaji: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "Esse campo não pode ser vazio",
            },
            notNull: {
              msg: "Esse campo precisa ser informado",
            },
          },
        },
        descricao: {
          type: DataTypes.STRING + " CHARSET utf8 COLLATE utf8_general_ci",
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "Esse campo não pode ser vazio",
            },
            notNull: {
              msg: "Esse campo precisa ser informado",
            },
          },
        },
        user_insert: {
          type: DataTypes.STRING,
          noUpdate: {
            readOnly: true,
          },
        },
        ip_insert: {
          type: DataTypes.STRING,
          noUpdate: {
            readOnly: true,
          },
        },
        date_insert: {
          type: DataTypes.DATEONLY,
          noUpdate: {
            readOnly: true,
          },
        },
        time_insert: {
          type: DataTypes.TIME,
          noUpdate: {
            readOnly: true,
          },
        },
        user_update: {
          type: DataTypes.STRING,
        },
        ip_update: {
          type: DataTypes.STRING,
        },
        date_update: {
          type: DataTypes.DATEONLY,
        },
        time_update: {
          type: DataTypes.TIME,
        },
      },
      {
        sequelize: connection,
        timestamps: false,
        tableName: "kanjis",

        hooks: {
          beforeCreate: async (user) => {
            const auditoria = await auditoriaController.getAuditoria();
            user.ip_insert = auditoria.ip;
            user.user_insert = "admin";
            user.date_insert = auditoria.data;
            user.time_insert = auditoria.horario;
          },
          beforeUpdate: async (user) => {
            const auditoria = await auditoriaController.getAuditoria();
            user.ip_update = auditoria.ip;
            user.user_update = "admin";
            user.date_update = auditoria.data;
            user.time_update = auditoria.horario;
          },
        },
      }
    );
  }
}

Dicionario.prototype.toJSON = function () {
  var values = this.get();
  delete values.ip_insert;
  delete values.user_insert;
  delete values.ip_update;
  delete values.user_update;
  delete values.date_update;
  delete values.date_insert;
  delete values.time_insert;
  delete values.time_update;
  return values;
};

module.exports = Dicionario;
