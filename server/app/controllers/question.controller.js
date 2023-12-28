const { question: Question, Sequelize } = require("../models")
const { receiverAttr, senderAttr } = require('../utils/constants')

exports.createQuestion = async (req, res) => {
  try {
    const { id: receiverId } = req.params
    const { message, senderId } = req.body
    const question = await Question.create({ message, receiverId, senderId })
    return res.json({ msg: "Question was created successfully!", data: question.toJSON() })
  } catch (error) {
    return res.status(500).send({ msg: err.message })
  }
};

exports.findAll = async (req, res) => {
  try {
    const { page = 1 } = req.query;
    const response = await Question.findAndCountAll({
      include: ['sender', 'receiver', { association: 'pledges', attributes: ['cents', 'questionId'] }],
      limit: 8,
      offset: (page - 1) * 8,
    });
    return res.send(response);
  } catch (error) {
    return res.status(500).send({ msg: error.message || "Some error occurred while retrieving questions." });
  }
}

exports.findUserQuestions = async (req, res) => {
  try {
    const { receiverId, page = 2 } = req.query;
    const response = await Question.findAndCountAll({
      include: ['sender', 'receiver', { association: 'pledges', attributes: ['cents', 'questionId'] }],
      where: { receiverId },
      limit: 8,
      offset: (page - 1) * 8,
    });
    return res.send(response);
  } catch (error) {
    return res.status(500).send({ msg: error.message || "Some error occurred while retrieving user questions." });
  }
}

exports.findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const { user } = req
    const response = await Question.findByPk(id, {
      attributes: {
        include: [
          [Sequelize.fn("COUNT", Sequelize.col("pledges.id")), "totalPledges"],
          [Sequelize.fn("SUM", Sequelize.col("pledges.cents")), "totalPledged"]
        ]
      },
      include: [
        { association: 'sender', attributes: senderAttr },
        { association: 'receiver', attributes: receiverAttr },
        { association: 'pledges' }
      ],
    });
    response.setDataValue('pledges', await response.getPledges(
      { limit: 8, attributes: ['cents'], include: [{ association: 'user', attributes: ['name', 'avatar'] }] }
    ))
    response.setDataValue('userPledge', await response.getPledges({ where: { userId: user.id }, limit: 1 }))
    return res.send(response);
  } catch (error) {
    return res.status(500).send({ msg: error.message || "Some error occurred while retrieving question." });
  }
}