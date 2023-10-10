"use strict";

require("chai").should();

var { each_cons } = require("./task2.js");

describe("Each Cons", function () {
  it("Should return cascading lists of 1 element", function () {
    each_cons([3, 5, 8, 13], 1).should.eql([[3], [5], [8], [13]]);
  });

  it("Should return cascading lists of 2 element", function () {
    each_cons([3, 5, 8, 13], 2).should.eql([
      [3, 5],
      [5, 8],
      [8, 13],
    ]);
  });

  it("Should return cascading lists of 3 element", function () {
    each_cons([3, 5, 8, 13], 3).should.eql([
      [3, 5, 8],
      [5, 8, 13],
    ]);
  });

  it("empty list should return an empty list", function () {
    each_cons([], 3).should.eql([]);
  });
});
