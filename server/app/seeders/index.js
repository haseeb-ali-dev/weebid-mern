const userSeeder = require('./user.seeder')
const questionSeeder = require('./question.seeder')
const bidSeeder = require('./bid.seeder')

module.exports = () => {
  userSeeder()
  questionSeeder()
  bidSeeder()
}
