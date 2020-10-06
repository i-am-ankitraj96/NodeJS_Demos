/*
const members = [
{
    "name": "Bob Johnson",
    "username": "bjohn",
    "password": "bjohn",
    "startDate": "2010-02-04T00:00:00.000Z",
    "endDate": "2030-03-03T00:00:00.000Z",
    "role": "admin",
    "imageUrl":"http://localhost:3000/assets/members/STU-2722.jpg"
},
{
    "name": "John Doe",
    "username": "johndoe",
    "password": "johndoe",
    "startDate": "2019-02-04T00:00:00.000Z",
    "endDate": "2020-03-03T00:00:00.000Z",
    "role": "member",
     "imageUrl":"http://localhost:3000/assets/members/FAC-0078.jpg"
}]
*/






const mongoose = require( 'mongoose' );

const memberSchema = new mongoose.Schema({
    name: {type: String},
    username: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
      
    },
    startDate: {
        type:  Date 
    },
    endDate: {
        type: Date
    }, 
    role: String,
    imageUrl: String,
   
   
});


memberSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
memberSchema.set('toJSON', {
    virtuals: true
});



const Member = mongoose.model("Member", memberSchema);
module.exports = Member;
