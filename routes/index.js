var express = require('express');
var router = express.Router();
var Book = require('../db/book');
var Author = require('../db/author');

/* GET home page. */
router.get('/', function(request, response, next) {
  Book.forge().fetchAll().then(function(books) {
    console.log(books.toJSON());
    response.render('index', { books: books.toJSON() });
  });
});

module.exports = router;
