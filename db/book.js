var bookshelf = require('./bookshelf');
require('./author');

var Book = bookshelf.Model.extend({
  tableName: 'book',
  authors: function() {
    return this.belongsToMany(Author);
  }
});

module.exports = bookshelf.model('Book', Book);
