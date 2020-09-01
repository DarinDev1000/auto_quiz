# Auto Quiz
*Author: DarinDev1000*  
*Liscence: MIT*  

Javascript quiz template with automatic grading tests!

*Built for use at [Bay Valley Tech Code Academy](https://www.bayvalleytech.com/)*

## Taking the quiz

* Clone this project
* Open the `quiz.js` file
* Write functions to return the correct answer
* Use console.logs to debug your code
* Run `node quiz.js` to run your code

*Add console.logs for debugging while taking the quiz*

### Self Grading

When your are done and ready to test your code run:

```shell
npm install
npm run test
```

If: it returns all green, good job!  
Else: try again till your code is right

*Pro Tip: Want to learn more Javascript?  Read the test and build files and learn how this project works!*

----

## Editing the quiz

**Make your own quiz by [using this project as a template](https://github.com/DarinDev1000/auto_quiz/generate)**  
Give it your quiz name. This can be used for each quiz.

### Editing Installation

```shell
  npm install
  npm run init
```

By default the source(answer) quiz and test are ignored in git.

### Edit the answer quiz and test

* Edit the answer questions / functions in `quiz_src/quiz.js`
* Write the correct functions (the answers)
* Make sure to leave the function definition and export
* Also leave the `// start` and `// end` in the code
* Edit the grading tests in `quiz_src/quiz.test.js`

To test your answer code, run `npm run test-answers`

When ready, build the quiz with `npm run build`

## Giving the quiz

**Now have students clone the repo you made and they can take the quiz!**

----
If you need to, you can fork this project and make your own template.

Reference: [Useful Regex Tool](https://regexr.com/)
