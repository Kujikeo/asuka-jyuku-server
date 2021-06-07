module.exports = {
  username: "root",
  password: "admin",
  database: "asukajyuuku",
  host: "localhost",
  dialect: "mysql",
  port: "3306",
  storage: "./__test__/database.sqllite",
  define: {
    timestamps: true,
    underscored: true,
    charset: "utf8mb4",
    collate: "utf8_general_ci",
  },
  logging: false,
};
