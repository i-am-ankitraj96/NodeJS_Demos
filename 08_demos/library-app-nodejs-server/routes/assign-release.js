const express = require('express')
const router = express.Router()
const Member = require('../models/member');
const Book = require('../models/book');
const Bookregistry = require('../models/bookregistry');
const AuthService = require('../utils/auth-service');

/*

Assign release book api

Angular change url




*/
router.get('/getallentries', async (request, response) => {
    try {
        const bookregistryentries = await Bookregistry.find({});
        response.send(bookregistryentries);
    } catch (error) {
        response.status(404).json(error);
    }


})

router.put('/assignbook/:id', async (request, response) => {
    const bookId = request.params.id;
    try {
        console.log(bookId)

        const currentBook = await Book.findById(bookId);
        console.log("currentBook",currentBook)
        const memberId = request.body.memberId;

        if (currentBook) {

            console.log("currentBook",currentBook)
            currentBook.availableCopies = currentBook.availableCopies - 1;
        



        await currentBook.save();

        //Add to registry
        var bookRegistryEntry = new Bookregistry({ "book": bookId, "member": memberId });
        await bookRegistryEntry.save();
        return response.status(200).json(bookRegistryEntry);
    }else{
        return response.status(404).send("Book/Member  Not Found");

    }


    } catch (error) {
        console.error(error);
        response.status(404).json(error);
    }

})

router.put('/releasebook/:id', async (request, response) => {
    const bookId = request.params.id;
    try {

        const memberId = request.body.memberId;
        const currentBook = await Book.findById(bookId);
        if (currentBook) {
            currentBook.availableCopies = currentBook.availableCopies + 1;


            await currentBook.save();

            //Update Book registry
            const bookRegistryEntry = await Bookregistry.findOne({ "book": bookId, "member": memberId, "status": "RENTED" })

            if (bookRegistryEntry) {
                console.log("retrieved ", bookRegistryEntry)
                bookRegistryEntry.returnDate = new Date();
                bookRegistryEntry.status = "RETURNED";
                await bookRegistryEntry.save();
                return response.status(200).json(bookRegistryEntry);
            }

        }

        return response.status(404).send("Book/Member  Not Found");




    } catch (error) {
        response.status(404).json(error);
    }

})




module.exports = router