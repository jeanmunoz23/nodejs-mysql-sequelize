const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');
class Book extends Model {}
Book = sequelize.define("Book", {
    // Model attributes
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING
    },
    author: {
      type: DataTypes.STRING
    },
    published: {
      type: DataTypes.BOOLEAN
    },
    // created_at: {
    //   allowNull: false,
    //   type: DataTypes.DATE
    // },
    // updated_at: {
    //   allowNull: false,
    //   type: DataTypes.DATE
    // }
  },
  {
    // Options
    timestamps: true,
    underscrored: true,
    // createdAt: "created_at",
    // updatedAt: "updated_at"
  }
);


module.exports = Book;