App.Post = DS.Model.extend({
	date: DS.attr('date'),
	author: DS.attr('string'),
	title: DS.attr('string'),
	content: DS.attr('string')
});