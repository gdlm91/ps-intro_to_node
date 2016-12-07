var fs = require('fs');

if(fs.existsSync('tmp/temp')) {
    console.log('Directory exists, removing...')
    if(fs.existsSync('tmp/temp/bye.txt')) {
        fs.unlinkSync('tmp/temp/bye.txt'); //Cant remove folder with files in it
    }
    fs.rmdirSync('tmp/temp');
}

fs.mkdir('tmp/temp', function(err) {
    fs.exists('tmp/temp', function(exists) {
        if(exists) {
            process.chdir('tmp/temp');
            fs.writeFile('hello.txt', 'Hello File created! Lets rename it to Bye', function(err) {
                fs.rename('hello.txt', 'bye.txt', function(err) {
                    fs.stat('bye.txt', function(err, stat) {
                        console.log('File has size: $ bytes', stat.size);
                        fs.readFile('bye.txt', function(err, data) {
                            console.log('File contents: $', data.toString());
                        })
                    })
                });
            });
        }
    })  
});
