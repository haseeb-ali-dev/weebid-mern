module.exports = {
  HOST: "db",
  USER: "root",
  PASSWORD: "",
  DB: "weebid_react",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}