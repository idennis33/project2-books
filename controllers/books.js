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
router.put('/:id', (req, res) => {
    req.body.finishedBook = req.body.finishedBook === "on" ? true : false;

    // Update the fruit document using our model
    Book.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel) => {
        res.redirect('/books');
    });
});

//CREATE
router.post('/', (req, res) => {
    if (req.body.finishedBook === "on") {
        req.body.finishedBook = true;
    } else {
        req.body.finishedBook = false;
    }
    Book.create(req.body, (error, createdBook) => {
        res.redirect('/books');
        console.log(error);
        console.log(createdBook)
    });
});
//EDIT
router.get('/:id/edit', (req, res) => {
    // Find our document from the collection - using mongoose model
    Book.findById(req.params.id, (err, foundBook) => {
        // render the edit view and pass it the found fruit
        res.render('books/Edit', {
            book: foundBook
        })
    });
});
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
