const Joi = require("joi");

exports.storeQuestion = Joi.object()
  .keys({
    message: Joi.string()
      .min(10)
      .max(140)
      .required(),
    senderId: Joi.number()
      .integer()
  });