//create a model for our task
const bycrpt = require("bcryptjs");

//exporting this model to our index
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("Users", {
    //define columns of our table
    firstName:{
        type: DataTypes.STRING,
        allowNull: false
    },lastName:{
        type: DataTypes.STRING,
        allowNull: false
    },email: {
      type: DataTypes.STRING,
      allowNull: false, //user must have email
      unique: true, //email must be unique
      validate: {
        isEmail: true //email must be valid
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  // create custom methods for our user model

  User.prototype.verifyPassword = function(password) {
    return bycrpt.compareSync(password, this.password);
  };

  // hooks happen on specific scenarios

  // encrypting user passwords

  User.addHook("beforeCreate", function(user) {
    user.password = bycrpt.hashSync(
      user.password,
      bycrpt.genSaltSync(10),
      null
    );
  });

  return User;
};