const { authJwt } = require("../middlewares")
const userController = require("../controllers/user.controller.js");

module.exports = app => {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", userController.allAccess);

  app.get(
    "/api/test/user",
    [authJwt.verifyToken],
    userController.userBoard
  ); 
  
  app.get(
    "/api/test/influencer",
    [authJwt.verifyToken, authJwt.isInfluencer],
    userController.userBoard
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    userController.adminBoard
  );

  app.post("/api/user", userController.create);

  app.get("/api/user", userController.findAll);

  app.get("/api/user/active", userController.findAllActive);

  app.get("/api/user/:id", userController.findOne);

  app.get("/api/search/user", userController.search);

  app.put("/api/user/:id", userController.update);

  app.delete("/api/user/:id", userController.delete);

  app.delete("/api/user", userController.deleteAll);
};