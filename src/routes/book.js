const express = require('express');
const router = express.Router();

const { bookController } = require('../controllers');
const { AUTH } = require("../middleware/authMdw");

router.post("/:libraryId", AUTH, bookController.createBook);
router.get("/", bookController.getBooks);
router.get("/:bookId", bookController.getBook);
router.put("/:bookId", AUTH, bookController.updateBook);
router.delete("/:bookId", AUTH, bookController.deleteBook);
//router.post("/:libraryId/book/", bookController.createBook);

module.exports = router;