var moment = require('./lib/moment');

Ember.Handlebars.helper('dateSince', function(value, options) {
	return moment(value).fromNow();
});