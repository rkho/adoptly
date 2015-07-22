var PourOver = require('pourover');

var database = {
  collection: new PourOver.collection(),

  addEntry = function(object) {
    this.collection.addItems(object);
  },

  updateEntry = function(id, key, value) {
    this.collection.updateItem(id, key, value);
  },
}

module.exports = database;
