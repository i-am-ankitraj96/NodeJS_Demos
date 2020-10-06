
// requires express module Just as other modules to use as middleware
var express = require("express");

//Calls express  function to start a new Express application
var app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//Middle ware used to Log request detail with time
app.use((request, response, next) => {
    console.log("Logging IP : " + request.ip + " on time " + new Date());
    next();
});

// Books payload
const books = [{ id: "SELF-HELP-0001", title: "The Power of your Subconscious Mind", price: 296, author: "Joseph Murphy", category: "self-help", publishYear: 2015, availableCopies: 3, totalCopies: 50, imageUrl: "http://localhost:3000/assets/books/SELF-HELP-0001.jpg" },
{ id: "LITERATURE-0002", title: "Great Gatsby", price: 240, author: "F. Scott Fitzgerald", category: "literature", publishYear: 1939, availableCopies: 2, totalCopies: 8, imageUrl: "http://localhost:3000/assets/books/LITERATURE-0002.jpg" }];

//Route to get all books using GET method
app.get('/api/books', async (request, response) => {
    response.send(books);
});


//Route to get existing book using GET method, use of request path parameters
app.get('/api/books/:id', async (request, response) => {
    console.log(request.params.id);
    let bookById = {};
    books.forEach(book => {
        if (book.id === request.params.id) { 
            bookById = book;
        }
    });
    response.send(bookById);
});

//Default routing
app.use(function (request, response) {
    response.end("Welcome to your first app!");
});

//Set the server to listen on port 3000 and use express
app.listen(3000, () => console.log('Server is running on port 3000'));
