var events = require('events');
var eventEmitter = new events.EventEmitter();
var eventEmitter1 = new events.EventEmitter();

var connectHandler = function connected() {
	console.log('connect successful');
	eventEmitter1.emit('data_received');
}

eventEmitter.on('connection', connectHandler);

eventEmitter1.on('data_received', function() {
	console.log("get the data");
});
eventEmitter.emit('connection');

console.log('project end');
