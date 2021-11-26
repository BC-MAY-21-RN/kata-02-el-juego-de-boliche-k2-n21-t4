const Frame = require("../src/models/Frame.js");


describe("Generate a multidimensional array.", () => {
  test("It should be filled with empty strings.", () => {
    const frame = new Frame();
    let estado = true;
    frame.createFrame();
    let frameGrid = frame.getFrame();
    frameGrid.forEach((i) => {
      i.forEach( (j) => {
        if (j.length > 1) {
          j.forEach( (value) => {
            if (value != "") estado = false;
          });
        } else {
          if (j != "") estado = false;
        }
      });
    });
    expect(estado).toBeTruthy();
  });
});
