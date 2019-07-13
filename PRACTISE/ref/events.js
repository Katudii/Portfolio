const EventEmitter =  require('events');

class MyEvent extends EventEmitter{}

var x = new MyEvent();

x.on('feel',(data)=>console.log(data));

x.emit('feel',{msg:'hey there'});