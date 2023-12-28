const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.user;

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) return res.status(403).send({ msg: "No token provided!" })
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) return res.status(401).send({ msg: err.message || "Unauthorized!", expired: err.name == "TokenExpiredError" })
    req.user = decoded.user;
    next();
  });
};

isAdmin = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    if (user.role === 'admin') {
      return next();
    }
    return res.status(403).send({ msg: "Require Admin Role!" });
  });
};

isInfluencer = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    if (user.role === 'influencer') {
      return next();
    }
    return res.status(403).send({ msg: "Require Influencer Role!" });
  });
};

const authJwt = {
  verifyToken,
  isAdmin,
  isInfluencer
}

module.exports = authJwt;