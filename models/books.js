const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const bookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: {type: String},
    img:{ type: String, required:true},
    finishedBook: Boolean
}, { timestamps: true });

//  Create Model from our Schema
const Book = mongoose.model('Book', bookSchema);

// Export Fruit Model
module.exports = Book;