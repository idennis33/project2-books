const express = require('express');
const router = express.Router();
const Wish = require('../models/wishs.js');


// Index
router.get('/', (req, res) => {
    Wish.find({}, (error, allWishs) => {
        res.render('wishs/Index', {
            wishs: allWishs
        })
    });

});

// New
router.get('/new', (req, res) => {
    res.render('books/New');
});

//DELETE
router.delete('/:id', (req, res) => {
    // Delete document from collection
    Wish.findByIdAndRemove(req.params.id, (err, wish) => {
        res.redirect('/wishs');
    });
});
//UPDATE
router.put('/:id', (req, res) => {
    req.body.finishedBook = req.body.finishedBook === "on" ? true : false;

    // Update the fruit document using our model
    Book.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel) => {
        res.redirect('/wishs');
    });
});

//CREATE
router.post('/', (req, res) => {
    if (req.body.finishedBook === "on") {
        req.body.finishedBook = true;
    } else {
        req.body.finishedBook = false;
    }
    Wish.create(req.body, (error, createdWish) => {
        res.redirect('/wishs');
        console.log(error);
        console.log(createdWish)
    });
});
//EDIT
router.get('/:id/edit', (req, res) => {
    // Find our document from the collection - using mongoose model
    Wish.findById(req.params.id, (err, foundWish) => {
        // render the edit view and pass it the found fruit
        res.render('wishs/Edit', {
            wish: foundWish
        })
    });
});
//SHOW
router.get('/:id', (req, res) => {
    // Find the specific document
    Wish.findById(req.params.id, (error, foundWish) => {
        // render the Show route and pass it the foundFruit
        res.render('wishs/Show', {
            wish: foundWish
        });
    });
});

module.exports = router; 
