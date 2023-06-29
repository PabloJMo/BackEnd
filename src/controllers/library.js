const { libraryService } = require('../services');

const createLibrary = async (req, res) => {
    try {
        const newLibrary = await libraryService.createLibrary(req.body);
        res.json(newLibrary);
    } catch (err) {
        res.status(500).json({ action: "createLibrary", error: err.message });
    }
};

const getLibrary = async (req, res) => {
    try {
        const library = await libraryService.getLibrary(req.params.libraryId);
        if (!library) {
            res.status(404).json({ action: "getLibrary", error: "Library Not Found." })
        } else {
            res.json(library);
        }
        
    } catch (err) {
        res.status(500).json({ action: "getLibrary", error: err.message });
    }
};

const getLibraries = async (req, res) => {
    try {
        const libraries = await libraryService.getLibraries();
        if (!libraries.length > 0) { // TODO verificar condicional del if
            res.status(404).json({ action: "getLibraries", error: "Libraries Not Found." })
        } else {
            res.json(libraries);
        }
        
    } catch (err) {
        res.status(500).json({ action: "getLibraries", error: err.message });
    }
};

const createBook = async (req, res) => {
    try {
        const book = await libraryService.createBook(req.params.libraryId, req.body);
        if (!book) {
            res.status(404).json({ action: "createBook", error: "Library Not Found." })
        } else {
            res.json(book);
        }
        
    } catch (err) {
        res.status(500).json({ action: "createBook", error: err.message });
    }
};

const updateLibrary = async (req, res) => {
    try {
        const result = await libraryService.updateLibrary(req.params.libraryId, req.body);
        if (!result) {
            res.status(404).json({ action: "updateLibrary", error: "Library Not Found." })
        } else {
            res.json({mensaje: "Registro actualizado con éxito"});
        }       
    } catch (err) {
        res.status(500).json({ action: "updateLibrary", error: err.message });
    }
};

const deleteLibrary = async (req, res) => {
    try {
        const result = await libraryService.deleteLibrary(req.params.libraryId);
        if (!result) {
            res.status(404).json({ action: "deleteLibrary", error: "Library Not Found." })
        } else {
            res.json({mensaje: "Registro eliminado con éxito"});
        }      
    } catch (err) {
        res.status(500).json({ action: "deleteLibrary", error: err.message });
    }
};

module.exports = {
    createLibrary,
    createBook,
    getLibrary,
    getLibraries,
    updateLibrary,
    deleteLibrary
};