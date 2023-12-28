module.exports = (sequelize, DataTypes) => {
  const Bid = sequelize.define("bid", {
    cents: {
      type: DataTypes.FLOAT
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0,
    },
    paidCents: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
  });

  return Bid;
}