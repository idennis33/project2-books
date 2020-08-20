const express = require('express');
const router = express.Router();
const Book = require('../models/books.js');


// Index
router.get('/', (req, res) => {
    Book.find({}, (error, allBooks) => {
        res.render('books/Index', {
            books: allBooks
        })
    });

});

// New
router.get('/new', (req, res) => {
    res.render('books/New');
});

//DELETE

//UPDATE

//CREATE
router.post('/', (req, res) => {
    if (req.body.finishedBook === "on") {
        req.body.finishedBook = true;
    } else {
        req.body.finishedBook = false;
    }
    Book.create(req.body, (error, createdBook) => {
        res.redirect('/books');
    });
});
//EDIT

//SHOW


module.exports = router; 
