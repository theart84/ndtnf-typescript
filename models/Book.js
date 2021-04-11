"use strict";
var idGenerator = require('node-unique-id-generator');
var Book = /** @class */ (function () {
    function Book(title, description, authors, favorite, fileCover, fileName, id) {
        if (title === void 0) { title = ''; }
        if (description === void 0) { description = ''; }
        if (authors === void 0) { authors = ''; }
        if (favorite === void 0) { favorite = ''; }
        if (fileCover === void 0) { fileCover = ''; }
        if (fileName === void 0) { fileName = ''; }
        if (id === void 0) { id = idGenerator.generateUniqueId(); }
        this.id = id;
        this.title = title;
        this.description = description;
        this.authors = authors;
        this.favorite = favorite;
        this.fileCover = fileCover;
        this.fileName = fileName;
    }
    return Book;
}());
module.exports = Book;
