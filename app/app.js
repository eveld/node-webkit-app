var gui = require('nw.gui');
var win = gui.Window.get();

var App = Ember.Application.create({
	debug: true
});

// Debug bar.
if(!App.get('debug')) {
	$('#debug').hide();
}

$('#debug .refresh').click(function() {
	win.reloadIgnoringCache();
});

$('#debug .developer').click(function() {
	win.showDevTools();
});

$('#debug .tests').click(function() {
	gui.Window.open(location.href + '?test', {
		toolbar: true
	});
});