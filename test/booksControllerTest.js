const mocha = require("mocha");
const assert = require("assert");

describe("basic mocha test", function () {
  it("should throw error", function () {
    assert.equal(2, 2);
  });
});
