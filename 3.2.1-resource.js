var util = require('util');
var EventEmitter = require('events').EventEmitter;

function Resource(m) {
    /* 
        Object inherits EventEmitter Prototype, so
        this has all its methods, ex: emit()
    */ 
    var maxEvents = m;
    var self = this;

    //Wait for next loop to simulate Async action
    process.nextTick(function() {
        var count = 0;
        
        self.emit('start');

        var t = setInterval(function() {
            self.emit('data', ++count);
            
            if(count === maxEvents) {
                self.emit('end', count);
                clearInterval(t);
            }
        }, 10);
    });

}

util.inherits(Resource, EventEmitter);

module.exports = Resource;

