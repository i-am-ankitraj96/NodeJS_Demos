/*
const books = [{ id: "SELF-HELP-0001", title: "The Power of your Subconscious Mind", price: 296, author: "Joseph Murphy", category: "self-help", publishYear: 2015, availableCopies: 3, totalCopies: 50, imageUrl: "http://localhost:3000/assets/books/SELF-HELP-0001.jpg" },
{ id: "LITERATURE-0002", title: "Great Gatsby", price: 240, author: "F. Scott Fitzgerald", category: "literature", publishYear: 1939, availableCopies: 2, totalCopies: 8, imageUrl: "http://localhost:3000/assets/books/LITERATURE-0002.jpg" }];

*/

const mongoose = require( 'mongoose' );

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique:true
    },
    author: {
        type:  String ,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    imageUrl: String,
    publishYear: Number,
    availableCopies: Number,
    totalCopies: Number,
    category: String
});


const Book = mongoose.model("Book", bookSchema);
module.exports = Book;

/*
const Book = mongoose.model( 'Book', BookSchema );

module.exports = {
    model: Book,
    schema: BookSchema
};*/

