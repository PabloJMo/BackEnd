const express = require('express');
const router = express.Router();

const { libraryController } = require('../controllers');
const { AUTH } = require("../middleware/authMdw");

router.post("/", AUTH, libraryController.createLibrary);
router.post("/:libraryId/book/", AUTH, libraryController.createBook);
router.get("/", libraryController.getLibraries);
router.get("/:libraryId", libraryController.getLibrary);
router.put("/:libraryId", AUTH, libraryController.updateLibrary);
router.delete("/:libraryId", AUTH, libraryController.deleteLibrary);

module.exports = router;