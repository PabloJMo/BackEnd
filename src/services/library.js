const { libraryProvider } = require('../providers');

const createLibrary = async (library) => {
    return await libraryProvider.createLibrary(library);
};

const getLibrary = async (libraryId) => {
    const library = await libraryProvider.getLibrary(libraryId);
    if (library) {
        // Lógica de negocio
        console.log(library.name);
    }
    return library;
};

const getLibraries = async () => {
    const libraries = await libraryProvider.getLibraries();
    if (libraries.length > 0) {
        // Lógica de negocio
        libraries.map((library) => {console.log(library.name)});
    }
    return libraries;
};

const createBook = async (libraryId, book) => {
    const library = await libraryProvider.getLibrary(libraryId);
    if (library) {
        const newBook = await libraryProvider.createBook(libraryId, book);
        return newBook;
    }
    return null;
};

const updateLibrary = async (libraryId, library) => {
    const result = await libraryProvider.updateLibrary(libraryId, library);
    if (result) {
        // Lógica de negocio
        console.log(result);
    }
    return result;
};

const deleteLibrary = async (libraryId) => {
    const result = await libraryProvider.deleteLibrary(libraryId);
    if (result) {
        // Lógica de negocio
        console.log(result);
    }
    return result;
};

module.exports = {
    createLibrary,
    createBook,
    getLibrary,
    getLibraries,
    updateLibrary,
    deleteLibrary
};