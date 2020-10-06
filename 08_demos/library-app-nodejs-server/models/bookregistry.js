

const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

const bookregistrySchema = new Schema({
    book:     {type: Schema.Types.ObjectId, ref: 'Book'},     
    member:     {type: Schema.Types.ObjectId, ref: 'Member'},     
    rentedDate: {     type:  Date , default: Date.now   },
    returnDate: {     type:  Date ,default:null   },
    status:{ type: String, default: "RENTED" }
});

bookregistrySchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
bookregistrySchema.set('toJSON', {
    virtuals: true
});


const bookregistry = mongoose.model("bookregistry", bookregistrySchema);
module.exports = bookregistry;
