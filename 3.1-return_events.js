var EventEmitter = require('events').EventEmitter;

function getResources(c) {
    var e = new EventEmitter();

    //Wait for next loop to simulate Async action
    process.nextTick(function() {
        var count = 0;
        
        e.emit('start');

        var t = setInterval(function() {
            e.emit('data', ++count);
            
            if(count === c) {
                e.emit('end', count);
                clearInterval(t);
            }
        }, 10);
    });

    return e; //Important!: return Event Emiter
}

var r = getResources(5);

r.on('start', function() {
    console.log("Get Started...");
})

r.on('data', function(d) {
    console.log("    I received data -> " + d);
})

r.on('end', function() {
    console.log("Get Ended!");
})