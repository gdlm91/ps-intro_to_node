var Resource = require('./3.2.1-resource.js');

var r = new Resource(5);

r.on('start', function() {
    console.log("Get Started...");
})

r.on('data', function(d) {
    console.log("    I received data -> " + d);
})

r.on('end', function() {
    console.log("Get Ended!");
})