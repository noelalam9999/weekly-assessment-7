const { myMap } = require("./index.js");
var mocks = require("./mocks.js");
describe("map", function () {
  afterEach(function () {
    called = false;
  });

  it("should return an array with the results of applying iteratee to each element", function () {
    myMap(mocks.arr, function (el, i, arr) {
      arr[i].should.equal(el);
      return el + "a";
    }).should.eql(mocks.mappedArray);
    myMap(mocks.obj, function (val, key, obj) {
      obj[key].should.equal(val);
      return val * 2;
    }).should.eql(mocks.objMapValuesArr);
  });

  it("should ignore the object prototype", function () {
    mocks.obj.constructor.prototype.foo = "foo";
    myMap(mocks.obj, function (val, key, obj) {
      Object.prototype.hasOwnProperty.call(obj, key).should.be.true;
      called = true;
    });
    called.should.be.true;
  });

  it("should access the original collection", function () {
    myMap(mocks.arr, function (el, i, arr) {
      arr.should.equal(mocks.arr);
      called = true;
    });
    called.should.be.true;
    called = false;
    myMap(mocks.obj, function (val, key, obj) {
      obj.should.equal(mocks.obj);
      called = true;
    });
    called.should.be.true;
  });

  it("should bind to context if one is passed", function () {
    myMap(
      mocks.arr,
      function () {
        this.should.equal(mocks.obj);
        called = true;
      },
      mocks.obj
    );
    called.should.be.true;
    called = false;
    myMap(
      mocks.obj,
      function () {
        this.should.equal(mocks.arr);
        called = true;
      },
      mocks.arr
    );
    called.should.be.true;
  });
});
