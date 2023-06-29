const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbConfig');
const Book = require('./book');

const Library = sequelize.define('Library', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false,        
    }
},{
    paranoid: true,
});

Library.hasMany(Book, {foreignKey: 'library'});
Book.belongsTo(Library, {
    foreignKey: 'library',
    //constraints: false
});

module.exports = Library;