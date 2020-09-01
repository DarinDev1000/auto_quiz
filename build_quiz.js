var fs = require('fs');

fs.readFile('./quiz_src/quiz.js', 'utf-8', function(err, str) {
    if (err) throw err;
 
    var newValue = str.replace('// start', '// start changed');
    // console.log(str)
 
    fs.writeFile('./quiz.js', newValue, 'utf-8', function(err, data) {
        if (err) throw err;
        console.log('Done!');
    })
});
