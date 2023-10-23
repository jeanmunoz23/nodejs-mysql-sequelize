const express = require('express');
const router = express.Router();
const book = require('../database/models/book');

// INDEX /api/book
router.get('/', (req, res) => {
    book.findAll().then(books => {
        res.json(books);
    })
})

// CREATE
router.post('/', (req, res) => {
    book.create({
        title: req.body.title,
        body: req.body.body
    }).then(result => {
        res.json(result);
    })
});

// READ /api/books/:id
router.get('/:id', (req, res) => {
    book.findByPk(req.params.id).then(result => {
        res.json(result);
    })
});

// UPDATE /api/books/:id
router.patch('/:id', (req, res) => {
    book.update({
        title: req.body.title,
        body: req.body.body
    }, {
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    });
});

// DELETE /api/books/:id
router.delete('/:id', (req, res) => {
    book.destroy({
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    })
});

module.exports = router;