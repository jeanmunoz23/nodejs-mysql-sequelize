const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class post extends Model {}
 Post = sequelize.define("Post",{
    title: DataTypes.STRING,
    body: DataTypes.TEXT
}, {
    sequelize,
    modelName: "post"
});

module.exports = post;