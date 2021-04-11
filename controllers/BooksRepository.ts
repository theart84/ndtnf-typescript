const BookModel = require('../models/Book');
const store = require('../store/store');

class BooksRepository {
    getBooks(req: any, res: any): void {
        const data = store;
        res.status(200).json({
            success: true,
            data,
        });
    }

    getBook(req: any, res: any): void {
        const { id } = req.params;
        const book = store.find((item: any) => item.id === id);
        if (book) {
            res.status(200).json({
                success: true,
                book,
            });
        } else {
            res.status(404).json({
                success: false,
                message: 'Book not found',
            });
        }
    }

    createBook(req: any, res: any): void {
        const {
            title,
            description,
            authors,
            favorite,
            fileCover,
            fileName,
        } = req.body;
        const book = new BookModel(
            title,
            description,
            authors,
            favorite,
            fileCover,
            fileName
        );
        store.push(book);
        res.status(201).json({
            success: true,
            data: book,
        });
    }

    updateBook(req: any, res: any): void {
        const {
            title,
            description,
            authors,
            favorite,
            fileCover,
            fileName,
        } = req.body;
        const { id } = req.params;
        const updateBookIndex = store.findIndex((item: any) => item.id === id);
        if (updateBookIndex !== -1) {
            store[updateBookIndex] = {
                ...store[updateBookIndex],
                title,
                description,
                authors,
                favorite,
                fileCover,
                fileName,
            };
            res.status(200).json({
                success: true,
                data: store[updateBookIndex],
            });
        } else {
            res.status(404).json({
                success: false,
                message: 'Book not found',
            });
        }
    }

    deleteBook(req: any, res: any): void {
        const { id } = req.params;
        const deleteBookIndex = store.findIndex((item: any) => item.id === id);
        if (deleteBookIndex !== -1) {
            store.splice(deleteBookIndex, 1);
            res.status(200).json({
                success: true,
            });
        } else {
            res.status(404).json({
                success: false,
                message: 'Book not found',
            });
        }
    }
}

module.exports = new BooksRepository();
