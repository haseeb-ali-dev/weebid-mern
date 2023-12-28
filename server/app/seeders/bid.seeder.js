const db = require('../models')
const Bid = db.bid

const bids = [];

for (let index = 1; index <= 10000; index++) {
  bids.push({
    cents: Math.floor(Math.random() * 10) + 2,
    userId: Math.floor(Math.random() * 50) + 2,
    questionId: Math.floor(Math.random() * 999) + 1,
  });
}

module.exports = () => {
  Bid.bulkCreate(bids);
}