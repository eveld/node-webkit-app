var fortune = require('fortune');
var express = fortune.express;

var app = express();
var port = 3000;

var database = fortune({
	adapter: 'nedb',
	db: 'feed',
	path: './data/',
	namespace: '/api'
});

database.resource('post', {
	author: String,
	title: String,
	date: Date,
	content: String
});

app.use(database.router);
app.listen(port);
console.log("listening on port 3000");