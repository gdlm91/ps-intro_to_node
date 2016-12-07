process.stdin.resume(); //stdin start paused. Needs to be resumed

process.stdin.on('data', function(chunk) {
    process.stdout.write('Data -> ' + chunk);
})

process.stdin.on('end', function() { //this didn't work for me
    process.stderr.write('End!\n');
})