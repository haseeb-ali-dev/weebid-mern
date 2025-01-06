const { bid: Bid } = require("../models")

exports.createBid = async (req, res) => {
  try {
    const { id: questionId } = req.params
    const { cents, userId } = req.body
    const bid = await Bid.create({ cents, questionId, userId })
    const user = await bid.getUser()
    // bid.setDataValue('user', await bid.getUser())
    return res.json({ msg: `Thanks for supporting ${user.name}. We sent a receipt to your email.`, data: bid })
  } catch (err) {
    return res.status(500).send({ msg: err.message })
  }
};

exports.findQuestionBids = async (req, res) => {
  try {
    const { questionId, page = 2 } = req.query;
    const response = await Bid.findAll({
      where: { questionId },
      include: [{ association: 'user', attributes: ['name', 'avatar'] }],
      limit: 8,
      offset: (page - 1) * 8,
    });
    return res.send(response);
  } catch (error) {
    return res.status(500).send({ msg: error.message || "Some error occurred while retrieving user questions." });
  }
}

exports.updateBid = async (req, res) => {
  try {
    const { id: questionId, userId } = req.params
    await Bid.update(req.body, {
      where: { questionId: questionId, userId: userId }
    });
    return res.json({ msg: 'Your pledge has been updated.' })
  } catch (error) {
    return res.status(500).send({ msg: error.message })
  }
};

exports.deleteBid = (req, res) => {
  const { id } = req.params
  Bid.destroy({ where: { id } })
    .then(num => res.send({
      msg: num == 1
        ? "Bid was deleted successfully!"
        : `Cannot delete Bid with id=${id}. Maybe Pledge was not found!`
    }))
    .catch(err => res.status(500).send({ msg: err.message || "Could not delete Bid with id=" + id }));
}