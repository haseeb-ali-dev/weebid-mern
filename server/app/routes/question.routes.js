const { authJwt, validateRequest } = require("../middlewares")
const questionController = require("../controllers/question.controller.js");
const { storeQuestion } = require('../validations')

module.exports = app => {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/app", questionController.findAll);

  app.get("/api/questions/user", questionController.findUserQuestions);

  app.get("/api/question/:id",
    [authJwt.verifyToken],
    questionController.findOne);

  app.post(
    "/api/ask/user/:id",
    [authJwt.verifyToken, validateRequest(storeQuestion)],
    questionController.createQuestion
  );
};