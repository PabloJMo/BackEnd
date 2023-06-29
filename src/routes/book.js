const express = require('express');
const router = express.Router();
const { bookController } = require('../controllers');

//CRUD
router.post("/:libraryId", bookController.createBook);
router.get("/", bookController.getBooks);
router.get("/:bookId", bookController.getBook);
router.put("/:bookId", bookController.updateBook);
router.delete("/:bookId", bookController.deleteBook);
//router.post("/:libraryId/book/", bookController.createBook);

module.exports = router;