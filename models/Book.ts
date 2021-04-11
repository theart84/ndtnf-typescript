const idGenerator = require('node-unique-id-generator');
interface IBook {
    id: string;
    title: string;
    description: string;
    authors : string;
    favorite : string;
    fileCover: string;
    fileName: string;
}
class Book implements IBook {
    id: string;
    title: string;
    description: string;
    authors : string;
    favorite : string;
    fileCover: string;
    fileName: string;
    constructor(
        title: string = '',
        description: string = '',
        authors: string = '',
        favorite: string = '',
        fileCover: string = '',
        fileName: string = '',
        id: string = idGenerator.generateUniqueId()
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.authors = authors;
        this.favorite = favorite;
        this.fileCover = fileCover;
        this.fileName = fileName;
    }
}

module.exports = Book;
