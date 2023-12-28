const Joi = require("joi");

exports.storeBid = Joi.object()
  .keys({
    cents: Joi.number()
      .min(1)
      .required()
      .messages({
        "number.base": `Pledge amount should be a type of number`,
        "number.min": `Pledge amount ahould be minimum $1`,
        "any.required": `Pledge amount is a required`,
      }),
    userId: Joi.number()
      .integer()
      .required()
  });

exports.updateBid = Joi.object()
  .keys({
    cents: Joi.number()
      .min(1)
      .required()
      .messages({
        "number.base": `Pledge amount should be a type of number`,
        "number.min": `Pledge amount ahould be minimum $1`,
        "any.required": `Pledge amount is a required`,
      }),
  });