const db = require('../models')
const Question = db.question

const questions = [];

for (let index = 1; index <= 1000; index++) {
  questions.push({
    message: `It is the message ${index}`,
    senderId: Math.floor(Math.random() * 50) + 2,
    receiverId: Math.floor(Math.random() * 50) + 2,
  });
}

module.exports = () => {
  Question.bulkCreate(questions);
}
