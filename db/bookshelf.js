var environment = process.env.NODE_ENV || 'development';
var config = require('../knexfile.js')[environment];
var knex = require('knex')(config);
bookshelf.plugin('registry');

module.exports = require('bookshelf')(knex);
