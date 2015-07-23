var PourOver = require('pourover');

var data = [ {user: 'Richard', vendor: 'Slack', duration: 600}, {user: 'Pavan', vendor: 'Slack', duration: 350}, {user: 'Arian', vendor: 'Salesforce', duration: 999}, {user: 'John', vendor: 'Salesforce', duration: 50}, {user: 'Richard', vendor: 'Marketo', duration: 400}, {user: 'Pavan', vendor: 'Marketo', duration: 300}]


var collection = new PourOver.Collection(data);

var user_filter = PourOver.makeExactFilter('user', ['Richard', 'Pavan', 'Arian', 'John']);

var vendor_filter = PourOver.makeExactFilter('vendor', ['Slack', 'Salesforce', 'Marketo']);

collection.addFilters([user_filter, vendor_filter]);

var database = {

  addEntry: function(object) {
    collection.addItems(object);
    console.log(object);
  },

  updateEntry: function(id, key, value) {
    collection.updateItem(id, key, value);
  },

  get: function(column, term) {
    var tempFilter = collection.filters[column].query(term);
    var tempCids = collection.filters[column].current_query.cids;

    return collection.get(tempCids);
  }
}

module.exports = database;
