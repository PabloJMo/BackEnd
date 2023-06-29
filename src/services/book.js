const { bookProvider , libraryProvider } = require('../providers');

const createBook = async (libraryId, book) => {
    const library = await libraryProvider.getLibrary(libraryId);
    if (library) {
        return await libraryProvider.createBook(libraryId, book);
    } else {
        return await bookProvider.createBook(null, book);
    }
    return null;
};

const getBook = async (bookId) => {
    const book = await bookProvider.getBook(bookId);
    if (book) {
        // Lógica de negocio
        console.log(book.name);
    }
    return book;
};

const getBooks = async () => {
    const books = await bookProvider.getBooks();
    if (books.length > 0) {
        // Lógica de negocio
        books.map((book) => {console.log(book.name)});
    }
    return books;
};

const updateBook = async (bookId, book) => {
    const result = await bookProvider.updateBook(bookId, book);
    if (result) {
        // Lógica de negocio
        console.log(result);
    }
    return result;
};

const deleteBook = async (bookId) => {
    const result = await bookProvider.deleteBook(bookId);
    if (result) {
        // Lógica de negocio
        console.log(result);
    }
    return result;
};

module.exports = {
    createBook,
    getBook,
    getBooks,
    updateBook,
    deleteBook
};