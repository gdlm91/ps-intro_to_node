var b = new Buffer('Hello');

console.log(b.toString());

console.log(b.toString('base64'));

var v = new Buffer('World').toString('base64'); //One Line!!

console.log(v);

console.log(b.toString('utf8', 0, 2)) //Substrings!!