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
    const updatedLibrary = await libraryProvider.updateLibrary(libraryId, library);
    if (updatedLibrary) {
        // Lógica de negocio
        console.log(updatedLibrary.name);
    }
    return updatedLibrary;
};

const deleteLibrary = async (libraryId) => {
    const library = await libraryProvider.deleteLibrary(libraryId);
    if (library) {
        // Lógica de negocio
        console.log(library.name);
    }
    return library;
};

module.exports = {
    createLibrary,
    createBook,
    getLibrary,
    getLibraries,
    updateLibrary,
    deleteLibrary
};