const quiz = require('./quiz');

test('q1 should be 5', () => {
  expect(quiz.q1()).toBe(5);
});

test('q2 should be a + b', () => {
  expect(quiz.q2(2, 3)).toBe(5);
});

