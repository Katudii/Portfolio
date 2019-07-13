const EventEmitter =  require('events');

class Logger extends EventEmitter{
    log(msg){
        this.emit('log',msg);
    }
}

module.exports = Logger;
