const express = require('express');
const router = express.Router();
const Book = require('../database/models/book.js');

// INDEX /api/Books
router.get('/', (req, res) => {
    Book.findAll().then(result => {
        res.json(result);
    })
})

// CREATE
router.post('/', (req, res) => {
    Book.create({
        title: req.body.title,
        author: req.body.author,
        published: req.body.published
    }).then(result => {
        res.json(result);
    })
});

// READ /api/Books/:id
router.get('/:id', (req, res) => {
    Book.findByPk(req.params.id).then(result => {
        res.json(result);
    })
});

// UPDATE /api/Books/:id
router.patch('/:id', (req, res) => {
    Book.update({
        title: req.body.title,
        author: req.body.author,
        published: req.body.published
    }, {
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    });
});

// DELETE /api/Books/:id
router.delete('/:id', (req, res) => {
    Book.destroy({
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    })
});

module.exports = router;