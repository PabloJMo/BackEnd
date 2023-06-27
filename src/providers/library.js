const { Library, Book } = require('../models');

const createLibrary = async (library) => {
    try {
        const newLibrary = await Library.create(library);
        //const newLibrary = {id: 123, ...library};
        return newLibrary;
    } catch (err) {
        console.error("Error when creating Library", err);
        throw err;
    }
};

const createBook = async (libraryId, book) => {
    try {
        const newBook = await Book.create({ ...book, LibraryId: libraryId});
        //const newBook = {id : 12, ...book, library: libraryId};
        return newBook;
    } catch (err) {
        console.error("Error when creating Book", err);
        throw err;
    }
};

const getLibrary = async (libraryId) => {
    try {
        const library = await Library.findByPk(libraryId, {include: {all: true}});
        //const library = {id: libraryId, name: "El Quijote"};
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
        // TODO verificar
        const [updatedRow] = await Library.update({...fields},{where : {id: libraryId} });
        return updatedRow;
    } catch (err) {
        console.error("Error when updating Library", err);
        throw err;
    }
};

const deleteLibrary = async (libraryId) => {
    try {
        //TODO Revisar
        //const library = await Library.findByPk(libraryId);
        const library = {libraryId}
        return library;
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