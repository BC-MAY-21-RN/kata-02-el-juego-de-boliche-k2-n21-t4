const Bowling = require("../src/models/Bowling");

test("Roll triple strikes and rest 0 equals 60.", () => {
  let bowling = new Bowling();
  bowling.roll(10, 3);
  bowling.roll(0, 17);
  expect(bowling.score).toBe(60);
});

test("Roll all 0 equals 0.", () => {
  let bowling = new Bowling();
  bowling.roll(0, 20);
  expect(bowling.score).toBe(0);
});

test("Roll all 10 equals 300", () => {
  let bowling = new Bowling();
  bowling.roll(10,20);
  expect(bowling.score).toBe(300);
});

test("Roll spare and 5, the rest 0 the score equals 20", () => {
  let bowling = new Bowling();
  bowling.roll(4);
  bowling.roll(6);
  bowling.roll(5);
  bowling.roll(0, 17);
  expect(bowling.score).toBe(20);
});