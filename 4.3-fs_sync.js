var fs = require('fs');

if(fs.existsSync('tmp/temp')) {
    console.log('Directory exists, removing...')
    if(fs.existsSync('tmp/temp/bye.txt')) {
        fs.unlinkSync('tmp/temp/bye.txt'); //Cant remove folder with files in it
    }
    fs.rmdirSync('tmp/temp');
}

fs.mkdirSync('tmp/temp');
if(fs.existsSync('tmp/temp')) {
    process.chdir('tmp/temp');
    fs.writeFileSync('hello.txt', 'Hello File created! Lets rename it to Bye');
    fs.renameSync('hello.txt', 'bye.txt');
    console.log('File has size: $ bytes', fs.statSync('bye.txt').size);
    console.log('File contents: $', fs.readFileSync('bye.txt').toString());
}