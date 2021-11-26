module.exports = class Frame {
  constructor(rows = 2, columns = 10){
    this.rows = rows;
    this.columns = columns;
  }
  
  createFrame() {
    this.frame = Array(this.rows).fill("").map( (comilla, index) => Array(10).fill(this.columns).map ( () => index == 0 ? Array(2).fill("") : ""));
  }

  getFrame() {
    return this.frame;
  }
};