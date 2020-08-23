const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const wishSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: {type: String},
    img:{ type: String, required:true},
    finishedBook: Boolean
}, { timestamps: true });

//  Create Model from our Schema
const Wish = mongoose.model('Wish', wishSchema);

// Export Fruit Model
module.exports = Wish;