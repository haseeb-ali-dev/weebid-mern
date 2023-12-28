const express = require('express')
const cors = require("cors")
const cron = require('node-cron')
const dotenv = require('dotenv')
const process = require("process");
const fs = require("fs");
const os = require("os");

const db = require('./app/models')
const dbSeeder = require('./app/seeders')

const app = express()
dotenv.config()
var corsOptions = {
  origin: "http://localhost:3000"
}

app.use(express.json())
app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: true }))

/*-----------Migrations & Seeder---------*/
db.sequelize.sync({ force: true })
  .then(() => {
    console.log("Synced db.");
    dbSeeder();
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

/*---------------Routes---------------*/
require('./app/routes')(app);

/*---------------Cronjobs-------------*/
// let flag = true;
// cron.schedule("*/5 * * * * *", function () {
//   console.log("-----------------------------------------------------------");
//   let heap = process.memoryUsage().heapUsed / 1024 / 1024;
//   let date = new Date().toLocaleString();
//   const freeMemory = Math.round((os.freemem() * 100) / os.totalmem()) + "%";
//   let csv = `${flag ? 'Date, Time, Heap, Memory\n' : ''} ${date}, ${heap}, ${freeMemory}\n`;
//   fs.appendFile('logs.csv', csv, function (err) {
//     if (err) throw err;
//     flag = false
//     console.log('server details logged!');
//   });
// });

const port = process.env.PORT || 3001
app.listen(port, () => {
  // fs.rmSync('logs.csv', { force: true })
  console.log(`Listening on port ${port}`)
})