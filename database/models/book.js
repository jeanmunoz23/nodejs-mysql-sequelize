const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');
class book extends Model {}
book = sequelize.define("Book", {
   title: {
     type: DataTypes.STRING,
     allowNull: false
   },
   author: {
     type:  DataTypes.STRING,
     allowNull: false
   },
   release_date: {
     type: DataTypes.DATEONLY,
   },
   subject: {
     type: DataTypes.INTEGER,
   }
});

module.exports = book;