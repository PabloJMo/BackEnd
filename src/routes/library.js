const express = require('express');
const router = express.Router();
const { libraryController } = require('../controllers');

router.post("/", libraryController.createLibrary);
router.post("/:libraryId/book/", libraryController.createBook);
router.get("/", libraryController.getLibraries);
router.get("/:libraryId", libraryController.getLibrary);
router.put("/:libraryId", libraryController.updateLibrary);
router.delete("/:libraryId", libraryController.deleteLibrary);

module.exports = router;