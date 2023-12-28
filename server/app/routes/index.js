module.exports = app => {
  require('./auth.routes')(app);
  require('./user.routes')(app);
  require('./question.routes')(app);
  require('./bid.routes')(app);
}