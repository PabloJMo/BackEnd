const { Library, Book } = require('../models');
///const {Op} = require('sequelize');

const createLibrary = async (library) => {
    try {
        const newLibrary = await Library.create(library);
        return newLibrary;
    } catch (err) {
        console.error("Error when creating Library", err);
        throw err;
    }
};

const createBook = async (libraryId, book) => {
    try {
        //const newBook = await Book.create({ ...book, library: libraryId});
        const [newBook, created] = await Book.findOrCreate({
            where: {
                isbn: book.isbn,
                library: null
            },
            defaults: {
                ...book, library: libraryId
            }
        });

        if (!created) {
            await newBook.update({library: libraryId});
        }
        return newBook;
    } catch (err) {
        console.error("Error when creating Book", err);
        throw err;
    }
};

const getLibrary = async (libraryId) => {
    try {
        const library = await Library.findByPk(libraryId, {include: {all: true}});
        return library;
    } catch (err) {
        console.error("Error when fetching Library", err);
        throw err;
    }
};

const getLibraries = async () => {
    try {
        const libraries = await Library.findAll({include: {all: true}});
        return libraries;
    } catch (err) {
        console.error("Error when fetching Libraries", err);
        throw err;
    }
};

const updateLibrary = async (libraryId, fields) => {
    try {
        const [updatedRow] = await Library.update({...fields},{where : {id: libraryId}});
        return updatedRow;
    } catch (err) {
        console.error("Error when updating Library", err);
        throw err;
    }
};

const deleteLibrary = async (libraryId) => {
    try {
        //TODO Revisar
        const deletedRow = await Library.destroy({where: {id: libraryId}});
        if (deletedRow > 0) {
            orphanedBooks = await Book.findAll({where: { library:libraryId }});
            orphanedBooks.map(async book => {
                await book.update({ library: null });
            });
        }
        return deletedRow;
    } catch (err) {
        console.error("Error when deleting Library", err);
        throw err;
    }
};


module.exports = {
    createLibrary,
    getLibrary,
    getLibraries,
    createBook,
    updateLibrary,
    deleteLibrary
};