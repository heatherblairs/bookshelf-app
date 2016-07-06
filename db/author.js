var bookshelf = require('./bookshelf');
require('./book');

var Author = bookshelf.Model.extend({
  tableName: 'author',
  books: function() {
    return this.belongsToMany(Book);
  }
});

module.exports = bookshelf.model('Author', Author);
