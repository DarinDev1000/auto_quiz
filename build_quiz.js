var fs = require('fs');

fs.readFile('./quiz_src/quiz.js', 'utf-8', function(err, str) {
    if (err) throw err;
 
    const find = '\/\/ start(.*?)\/\/ end';
    const re = new RegExp(find, 'gs');
    newStr = str.replace(re, '// start\n    \n    // end');
 
    fs.writeFile('./quiz.js', newStr, 'utf-8', function(err, data) {
        if (err) throw err;
        console.log('Done!');
    })
});
