const Frame = require("./Frame.js");

module.exports = class Bowling {
  constructor() {
    this.rolls = [];
    this.frame = new Frame();
    this.frame.createFrame();
  }

  roll(pins, count = 1) {
    for (let i = 0; i < count; i ++)
      this.rolls.push(pins);
  }
  
  get score() {
    let score = 0;
    let rollIndex = 0;

    for (let frameIndex = 0; frameIndex < 10; frameIndex++) {
      if (this.isStrike(rollIndex)) {
        score += this.strikeBonus(rollIndex);
        rollIndex++;
        continue;
      }

      let frameScore = this.sumFrame(rollIndex);
      if (this.isSpare(frameScore)) {
        score += this.spareBonus(rollIndex);
      } else {
        score += frameScore;
      }
      rollIndex += 2;
    }
    return score;
  }

  getRolls() {
    return this.rolls;
  }

  sumFrame(rollIndex) {
    return this.rolls[rollIndex] + this.rolls[rollIndex + 1];
  }

  spareBonus(rollIndex) {
    return 10 + this.rolls[rollIndex + 2];
  }
  strikeBonus(rollIndex) {
    return 10 + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
  }

  isSpare(frameScore) {
    return frameScore === 10;
  }

  isStrike(rollIndex) {
    return this.rolls[rollIndex] === 10;
  }
};