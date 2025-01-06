const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");

exports.signup = (req, res) => {
  User.create({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  }).then(user => {
    if (user) {
      var token = jwt.sign({ user: user }, config.secret, {
        expiresIn: 86400
      });
      return res.json({ msg: 'User was registered successfully!', accessToken: token });
    }
  }).catch(err => res.status(500).send({ msg: err.message }));
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(user => {
    if (!user) return res.status(404).send({ msg: 'User Not found.' });
    var passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!passwordIsValid) return res.status(401).send({ msg: 'Invalid Password!' });
    var token = jwt.sign({ user: user }, config.secret, {
      expiresIn: 86400 // 24 hours
    });
    return res.json({ msg: "User was logged in successfully!", accessToken: token });
    // return res.status(200).send({ msg: "User was logged in successfully!", accessToken: token });
  }).catch(err => res.status(500).send({ msg: err.message }));
};
