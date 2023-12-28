const db = require("../models");
const { getPaginatedData } = require("../utils/helpers");
const User = db.user
const Op = db.Sequelize.Op

exports.create = (req, res) => {
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  const user = {
    name: req.body.name,
    email: req.body.email,
    active: req.body.active ? req.body.active : false
  };
  User.create(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    });
};

exports.findAll = async (req, res) => {
  const { name, page = 1 } = req.query;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  await User.findAndCountAll({
    where: condition,
    attributes: ['id', 'name', 'avatar'],
    limit: 10,
    offset: (page - 1) * 10,
    order: [['name', 'ASC'], ['createdAt', 'ASC'], ['id', 'ASC']]
  })
    .then(data => res.send(getPaginatedData(data, page, 10)))
    .catch(err => res.status(500).send({ msg: err.message || "Some error occurred while retrieving users." }));
};

exports.findOne = async (req, res) => {
  const { id } = req.params;
  await User.findByPk(id, { attributes: { exclude: ['password'] } })
    .then(async user => {
      user.setDataValue('pitches', await user.getPitches({
        limit: 8,
        include: [{ association: 'receiver', attributes: ['avatar'] },
        { association: 'pledges', attributes: ['cents'] }]
      }))
      return user ? res.send(user) : res.status(404).send({ msg: `Cannot find User with id=${id}.` })
    })
    .catch(error => res.status(500).send({ msg: error.message || "Error retrieving User with id=" + id }))
};

exports.update = (req, res) => {
  const id = req.params.id;

  User.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Error updating User with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  User.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Could not delete User with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
  User.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Users were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Users."
      });
    });
};

exports.findAllActive = (req, res) => {
  User.findAll({ where: { active: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

exports.search = (req, res) => {
  const { name } = req.query;
  var condition = name ? { name: { [Op.like]: `${name}%` } } : null;
  User.findAll({ where: condition, attributes: ['id', 'name', 'avatar'] })
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ msg: err.message || "Some error occurred while retrieving users." }))
};