var http = require('http');



http.createServer(function (request, response) {

    if (request.url.includes("/api/members")) {
        const members =   [{ id:"STU-3415",       name:"Abdul Rahman",       startDate:new Date("2019-02-04T03:24:00"),  endDate:new Date("2020-02-03T03:24:00"),       imageUrl:"http://localhost:3000/assets/members/STU-3415.jpg"   },
                            {id:"FAC-0078",       name:"Warren Taylor",       startDate:new Date("2014-03-10T03:24:00"),  endDate:new Date("2024-03-09T03:24:00"),       imageUrl:"http://localhost:3000/assets/members/FAC-0078.jpg"   }];            
        response.write(JSON.stringify(members));

    }else if (request.url.includes("/api/books")) {
        const books = [{ id: "SELF-HELP-0001", title: "The Power of your Subconscious Mind", price: 296, author: "Joseph Murphy", category: "self-help", publishYear: 2015, availableCopies: 3, totalCopies: 50, imageUrl: "http://localhost:3000/assets/books/SELF-HELP-0001.jpg" },
                        { id: "LITERATURE-0002", title: "Great Gatsby", price: 240, author: "F. Scott Fitzgerald", category: "literature", publishYear: 1939, availableCopies: 2, totalCopies: 8, imageUrl: "http://localhost:3000/assets/books/LITERATURE-0002.jpg" }];
        response.write(JSON.stringify(books));
    }
    else
        response.write("Hello Everyone !")

    response.end();
}).listen(3000);


console.log("server Started")


/*
http.createServer(function (request, response) {

    response.write("Hello Everyone !");
    response.end();

}).listen(3000);




http.createServer(function (request, response) {

    if (request.url.includes("/api/books")) {


        const books = [{ id: "SELF-HELP-0001", title: "The Power of your Subconscious Mind", price: 296, author: "Joseph Murphy", category: "self-help", publishYear: 2015, availableCopies: 3, totalCopies: 50, imageUrl: "http://localhost:3000/assets/books/SELF-HELP-0001.jpg" },
                        { id: "LITERATURE-0002", title: "Great Gatsby", price: 240, author: "F. Scott Fitzgerald", category: "literature", publishYear: 1939, availableCopies: 2, totalCopies: 8, imageUrl: "http://localhost:3000/assets/books/LITERATURE-0002.jpg" },

                        ];
        response.write(JSON.stringify(books));
    }
    else
        response.write("Hello Everyone !")


    response.end();
}).listen(3000);



//create a server object:
http.createServer(function (request, response) {

    if(request.url.includes("/api/getbook"))
        response.write('returning books from getbook api');       
    else if(request.url.includes("/api/getmembers"))
        response.write('returning members from getmembers api');   
    else
        response.write("Hello Everyone !")    
    
  
  response.end(); 
}).listen(3000); 




/*
http.createServer(function (request, response) {

    response.write("Hello Everyone !")    
    
  response.end(); 
}).listen(3000); 





http.createServer(function (request, response) {
    response.write("Hello Everyone !")    
    
  
  response.end(); 
}).listen(3000); 

*/
