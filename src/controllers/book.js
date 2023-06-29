const { bookService } = require('../services');

const createBook = async (req, res) => {
    try {
        const newBook = await bookService.createBook(req.params.libraryId, req.body);
        if (!newBook) {
            res.status(404).json({ action: "createBook", error: "Library Not Found." })
        } else {
            res.json(newBook);
        }
       
    } catch (err) {
        res.status(500).json({ action: "createBook", error: err.message });
    }
};

const getBook = async (req, res) => {
    try {
        const book = await bookService.getBook(req.params.bookId);
        if (!book) {
            res.status(404).json({ action: "getBook", error: "Book Not Found." });
        } else {
            res.json(book);
        }
        
    } catch (err) {
        res.status(500).json({ action: "getBook", error: err.message });
    }
};

const getBooks = async (req, res) => {
    try {
        const books = await bookService.getBooks();
        if (!books.length > 0) {
            res.status(404).json({ action: "getBooks", error: "Books Not Found." });
        } else {
            res.json(books);
        }
        
    } catch (err) {
        res.status(500).json({ action: "getBooks", error: err.message });
    }
};

const updateBook = async (req, res) => {
    try {
        const result = await bookService.updateBook(req.params.bookId, req.body);
        if (!result) {
            res.status(404).json({ action: "updateBook", error: "Book Not Found." })
        } else {
            res.json({mensaje: "Libro actualizado con éxito"});
        }       
    } catch (err) {
        res.status(500).json({ action: "updateBook", error: err.message });
    }
};

const deleteBook = async (req, res) => {
    try {
        const result = await bookService.deleteBook(req.params.bookId);
        if (!result) {
            res.status(404).json({ action: "deleteBook", error: "Book Not Found." })
        } else {
            res.json({mensaje: "Libro eliminado con éxito"});
        }      
    } catch (err) {
        res.status(500).json({ action: "deleteBook", error: err.message });
    }
};

module.exports = {
    createBook,
    getBook,
    getBooks,
    updateBook,
    deleteBook
};