const express = require('express')
const router = express.Router()
const Member = require('../models/member');

router.get('', async (request, response) => {
    try {
        const members = await Member.find({},{"_id": 1,"name": 2,"username": 3,"startDate": 4,"endDate": 5,"role": 6,"imageUrl": 7 });
        response.send(members);
    } catch (error) {
        response.status(404).json(error);
    }


})

router.get('/:id', async (request, response) => {
    const memberId = request.params.id;
    try {
        // The below will send an array of elements
        //const member = await Member.find({ _id: memberId });

        //This will send a single element
        const member = await Member.findById( memberId ,{"_id": 1,"name": 2,"username": 3,"startDate": 4,"endDate": 5,"role": 6,"imageUrl": 7 });
        response.status(200).json(member);
    } catch (error) {
        response.status(404).json(error);
    }

})


router.put('/:id', async (request, response) => {
    const memberId = request.params.id;
    try {
        const currentMember = await Member.findById( memberId);  
        
        
        if( request.body.startDate)
            currentMember.startDate = request.body.startDate;

        if( request.body.endDate)
            currentMember.endDate = request.body.endDate;  
            
        if( request.body.password)    
            currentMember.password = request.body.password;      

        await currentMember.save();

        return res.status(200).json(currentMember);
    } catch (error) {
        response.status(404).json(error);
    }

})
router.delete('/:id', async (request, response) => {
   
    try {
        const memberId = request.params.id;
        const finalMember = await Member.findOneAndDelete({ _id: memberId }).exec();
        return response.status(200).json({ "message": "Successfully Deleted"  });
    } catch (error) {
        console.error(error)
        response.status(404).json(error);
    }

}) 


router.post('', async (request, response) => {
    try {
        console.log("in post",request.body)

        var newMember = new Member(request.body);          
        const insertedMember = await newMember.save();
        response.send(insertedMember);

    } catch (error) {
        response.status(404).json(error);
    }


})


module.exports = router