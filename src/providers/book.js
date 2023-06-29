const { Library, Book } = require('../models');

const createBook = async (libraryId, book) => {
    try {
        const newBook = await Book.create({...book, library: libraryId});
        return newBook;
    } catch (err) {
        console.error("Error when creating Book", err);
        throw err;
    }
};

const getBook = async (bookId) => {
    try {
        const book = await Book.findByPk(bookId);
        return book;
    } catch (err) {
        console.error("Error when fetching Book", err);
        throw err;
    }
};

const getBooks = async () => {
    try {
        const books = await Book.findAll();
        return books;
    } catch (err) {
        console.error("Error when fetching Libraries", err);
        throw err;
    }
};

const updateBook = async (bookId, fields) => {
    try {
        // TODO verificar
        const [updatedRow] = await Book.update({...fields},{where : {id: bookId} });
        return updatedRow;
    } catch (err) {
        console.error("Error when updating Book", err);
        throw err;
    }
};

const deleteBook = async (bookId) => {
    try {
        //TODO Revisar
        const deletedRow = await Book.destroy({where: {id: bookId}});
        return deletedRow;
    } catch (err) {
        console.error("Error when deleting Library", err);
        throw err;
    }
};


module.exports = {
    createBook,
    getBook,
    getBooks,
    updateBook,
    deleteBook
};