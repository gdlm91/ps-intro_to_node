var request = require('request');
var fs = require('fs');
var zlib = require('zlib');

/*var s = request('http://www.google.com');
s.pipe(process.stdout); //Piping*/

//Chain Piping
request('http://www.google.com') //Read Stream
    .pipe(zlib.createGzip()) //Write-Read Stream
    .pipe(fs.createWriteStream('tmp/3.5-google.gz')); //Write Stream