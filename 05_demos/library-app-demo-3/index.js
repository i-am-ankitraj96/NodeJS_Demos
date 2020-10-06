
// requires express module Just as other modules to enable middleware capabilities
var express = require("express");

var http = require("http");

//Calls express  function to start a new Express application
var app = express();


const path = require('path');
const fs =require('fs')

//Note we have used express middleware
// Added a request handler in express 

app.use((request, response, next) => {

    if (request.url.startsWith("/assets")) {


        //__dirname => gives the current directory
        // request.url => will gives the image url available in assets
        //construct the full path
        var filePath = path.join(__dirname, request.url);
        console.log(filePath)

        //Check file exists with command fs.stat
        fs.stat(filePath, function (fileError, fileInfo) {

            //fileError will be null , if file exists            
            if (fileError) {
                next();
                return;
            }
            //Check valid file
            if (fileInfo.isFile()) {
                //Send file with sendFile method                
                response.sendFile(filePath);

                // No need to call next() method , as we have already sent file
            } else {
                //Not a valid file process to other handlers
                next();
            }
        });

    }


});



app.use((request, response, next) => {
    console.log("Logging IP : " + request.ip + " on time " + new Date());
    next();

});
app.use((request, response, next) => {
    console.log("Logging Request from url : " + request.url);
    next();

});

app.get('/api/books', (request, response) => {

    const books = [{ id: "SELF-HELP-0001", title: "The Power of your Subconscious Mind", price: 296, author: "Joseph Murphy", category: "self-help", publishYear: 2015, availableCopies: 3, totalCopies: 50, imageUrl: "http://localhost:3000/assets/books/SELF-HELP-0001.jpg" },
    { id: "LITERATURE-0002", title: "Great Gatsby", price: 240, author: "F. Scott Fitzgerald", category: "literature", publishYear: 1939, availableCopies: 2, totalCopies: 8, imageUrl: "http://localhost:3000/assets/books/LITERATURE-0002.jpg" }];
    response.send(books);
});


app.get('/api/members', (request, response) => {
    const members = [{ id: "STU-3415", name: "Abdul Rahman", startDate: new Date("2019-02-04T03:24:00"), endDate: new Date("2020-02-03T03:24:00"), imageUrl: "http://localhost:3000/assets/members/STU-3415.jpg" },
    { id: "FAC-0078", name: "Warren Taylor", startDate: new Date("2014-03-10T03:24:00"), endDate: new Date("2024-03-09T03:24:00"), imageUrl: "http://localhost:3000/assets/members/FAC-0078.jpg" }];
    response.send(members);

});

app.use(function (request, response) {

    response.end("Hello, Everyone!");
});




//Set the http server to listen on port 3000 and use express
http.createServer(app).listen(3000);

console.log("server Started")