const express = require('express')
const router = express.Router()
const Book = require('../models/book');

router.get('', async (request, response) => {
    try {
        const books = await Book.find({});
        response.send(books);
    } catch (error) {
        response.status(404).json(error);
    }


})


router.get('/search', async (request, response) => {
    
    try {  
        // get the querystring named title
       // let titleQuery = request.query.title  ;
        let titleQuery = request.query.title || "" ;


        //trim the query
        titleQuery = titleQuery.trim();
        const book = await Book.find( { [ "title"] : new RegExp( titleQuery, 'i' ) }   )

        
        response.status(200).json(book);
    } catch (error) {
        console.error(error)
        response.status(404).json(error);
    }

})


router.get('/:id', async (request, response) => {
    const bookId = request.params.id;
    try {

        const book = await Book.findById( bookId );
        response.status(200).json(book);
    } catch (error) {
        response.status(404).json(error);
    }

})


router.put('/:id', async (request, response) => {
    const bookId = request.params.id;
    try {
        const currentBook = await Book.findById( bookId);
        if( request.body.availableCopies)  
            currentBook.availableCopies = request.body.availableCopies;
           
        if( request.body.totalCopies)              
            currentBook.totalCopies = request.body.totalCopies;
        
              

        await currentBook.save();

        return res.status(200).json(currentBook);
    } catch (error) {
        response.status(404).json(error);
    }

})
router.delete('/:id', async (request, response) => {
   
    try {
        const bookId = request.params.id;
        const finalBook = await Book.findOneAndDelete({ _id: bookId }).exec();
        return response.status(200).json({ "message": "Successfully Deleted"  });
    } catch (error) {
        console.error(error)
        response.status(404).json(error);
    }

}) 


router.post('', async (request, response) => {
    try {
        console.log("in post",request.body)

        var newBook = new Book(request.body);          
        const insertedBook = await newBook.save();
        response.send(insertedBook);

    } catch (error) {
        response.status(404).json(error);
    }


})


module.exports = router