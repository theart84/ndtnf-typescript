"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var BookModel = require('../models/Book');
var store = require('../store/store');
var BooksRepository = /** @class */ (function () {
    function BooksRepository() {
    }
    BooksRepository.prototype.getBooks = function (req, res) {
        var data = store;
        res.status(200).json({
            success: true,
            data: data,
        });
    };
    BooksRepository.prototype.getBook = function (req, res) {
        var id = req.params.id;
        var book = store.find(function (item) { return item.id === id; });
        if (book) {
            res.status(200).json({
                success: true,
                book: book,
            });
        }
        else {
            res.status(404).json({
                success: false,
                message: 'Book not found',
            });
        }
    };
    BooksRepository.prototype.createBook = function (req, res) {
        var _a = req.body, title = _a.title, description = _a.description, authors = _a.authors, favorite = _a.favorite, fileCover = _a.fileCover, fileName = _a.fileName;
        var book = new BookModel(title, description, authors, favorite, fileCover, fileName);
        store.push(book);
        res.status(201).json({
            success: true,
            data: book,
        });
    };
    BooksRepository.prototype.updateBook = function (req, res) {
        var _a = req.body, title = _a.title, description = _a.description, authors = _a.authors, favorite = _a.favorite, fileCover = _a.fileCover, fileName = _a.fileName;
        var id = req.params.id;
        var updateBookIndex = store.findIndex(function (item) { return item.id === id; });
        if (updateBookIndex !== -1) {
            store[updateBookIndex] = __assign(__assign({}, store[updateBookIndex]), { title: title,
                description: description,
                authors: authors,
                favorite: favorite,
                fileCover: fileCover,
                fileName: fileName });
            res.status(200).json({
                success: true,
                data: store[updateBookIndex],
            });
        }
        else {
            res.status(404).json({
                success: false,
                message: 'Book not found',
            });
        }
    };
    BooksRepository.prototype.deleteBook = function (req, res) {
        var id = req.params.id;
        var deleteBookIndex = store.findIndex(function (item) { return item.id === id; });
        if (deleteBookIndex !== -1) {
            store.splice(deleteBookIndex, 1);
            res.status(200).json({
                success: true,
            });
        }
        else {
            res.status(404).json({
                success: false,
                message: 'Book not found',
            });
        }
    };
    return BooksRepository;
}());
module.exports = new BooksRepository();
