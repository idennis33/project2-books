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
router.get('/:id', (req, res) => {
    // Find the specific document
    Book.findById(req.params.id, (error, foundBook) => {
        // render the Show route and pass it the foundFruit
        res.render('books/Show', {
            book: foundBook
        });
    });
});

module.exports = router; 
