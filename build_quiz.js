var fs = require('fs');

// Use fs to read the quiz answer file
fs.readFile('./quiz_src/quiz.js', 'utf-8', function(err, str) {
    if (err) throw err;

    const find = '\/\/ start(.*?)\/\/ end';  // Regex: select everything between '// start' and '// end'
    const re = new RegExp(find, 'gs');  // the s in 'gs' means that '.' also matches new lines('\n')
    newStr = str.replace(re, '// start\n  \n  // end');  // Replace the answer code with an empty line

    // Write the empty quiz to the main dir
    fs.writeFile('./quiz.js', newStr, 'utf-8', function(err, data) {
        if (err) throw err;
        console.log('Done!');
    })
});
