# Auto Quiz

*Author: DarinDev1000*  
*License: MIT*

Javascript learning quiz template with automatic self grading tests!

This quiz is designed to continually try to get the right answer. (Self Graded)

*Built for use at [Bay Valley Tech Code Academy](https://www.bayvalleytech.com/)*

# Students -->

## Taking the quiz

* Clone this project
* Open the `quiz.js` file
* Write functions to return the correct answer
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

# Teachers -->

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

## Details for editing the quiz

If you want to commit the answer files in git, remove the quiz lines in the `.gitignore` file

### Editing the quiz: `quiz_src/quiz.js`

Add question functions in this format:

```javascript
function q42() {
  // <The question>
  // start
  <correct code to the question>
  return answer
  // end
}
// console.log(q42());
```

* Don't forget to change the number for each question.
* Make sure the answer code starts with '// start' and ends with '//end'. Otherwise the build script will not work correctly. Everything between is removed during the build.
* The console.log is just for reference while taking the quiz

Then at the bottom of the file, export each function:

```javascript
module.exports = {
  q1, q2, q3, q4, q5, q42
};
```

### Editing the quiz test: `quiz_src/quiz.test.js`

Add test functions in this format:

```javascript
describe('Question 42', () => {
  test('should be 21 * 2', () => {
    expect(quiz.q42(21, 2)).toBe(42);
  });

  test('should be a * b', () => {
    expect(quiz.q42(2, 2)).toBe(4);
  });
  
  test('should be <answer>', () => {
    expect(quiz.q42(<parameters_case_3>)).toBe(<answer>);
  });
});
```

* Each question is enclosed in a describe function
* Each question can have multiple test cases (different parameters)

**For more details, look at [Jest Docs](https://jestjs.io/docs/en/using-matchers)**

----

If you need to, you can fork this project and make your own template.

References:  
[Jest](https://jestjs.io/docs/en/using-matchers)  
[Useful Regex Tool](https://regexr.com/)
