module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.TEXT
    },
    role: {
      type: DataTypes.ENUM('user', 'admin'),
      defaultValue: 'user',
    },
    type: {
      type: DataTypes.ENUM('regular', 'google', 'facebook'),
      defaultValue: 'regular',
    },
    credits: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    avatar: {
      type: DataTypes.STRING(500),
      defaultValue: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-No-Background.png',
    },
    insta: {
      type: DataTypes.STRING
    },
    bio: {
      type: DataTypes.TEXT
    }
  });

  return User;
}