const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbConfig');
const Library = require('./library');

const Book = sequelize.define('Book', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    isbn: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    autor: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},{
    paranoid: true,
});

module.exports = Book;