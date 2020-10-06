const express = require('express')
const router = express.Router()
const Book = require('../models/book');

router.get('', async (request, response) => {
    try {
        const books = await Book.find({});
		
		//the below will select only id title & author 
		  //const books = await Book.find({},{"_id":1,"title":2,"author":3});
        response.send(books);
    } catch (error) {
        response.status(404).json(error);
    }


})

router.get('/:id', async (request, response) => {
    const bookId = request.params.id;
    try {
        // The below will send an array of elements
        //const book = await Book.find({ _id: bookId });

        //This will send a single element
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
        currentBook.availableCopies = request.body.availableCopies;
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