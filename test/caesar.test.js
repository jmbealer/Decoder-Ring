const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar() tests written by team 4", () => {

describe("hrror handling", () => {
  it("should return false if value isn't present, equal to 0", () => {
    const input = "testing";
    const shift = 0;
    const actual = caesar(input, shift, encode = true);
    expect(actual).to.be.false;
  })
  it("should return false if value less than 25", () => {
    const input = "testing";
    const shift = -26;
    const actual = caesar(input, shift, encode = true);
    expect(actual).to.be.false;
  })
  it("should return false if value less than 25", () => {
    const input = "testing";
    const shift = 26;
    const actual = caesar(input, shift, encode = true);
    expect(actual).to.be.false;
  })
})

  describe("encoding", () => {
    it("should maintain spaces throughout", () => {
      const shift = 2;
      const input = "team four";
      const expected = "vgco hqwt";
      const actual = caesar(input, shift, encode = true);
      expect(actual).to.equal(expected);
    })
    it("Should handle nonalphabetical symbols", () => {
      const shift = 2;
      const input = "team four";
      const expected = "vgco hqwt";
      const actual = caesar(input, shift, encode = true);
      expect(actual).to.equal(expected);
    })
    it("Should ignore capital letters", () => {
      const shift = 2;
      const input = "Team Four";
      const expected = "vgco hqwt";
      const actual = caesar(input, shift, encode = true);
      expect(actual).to.equal(expected);
    })
    it("Should handle shifts that go off the alphabet and should loop back around", () => {
      const shift = 2;
      const input = "zebra";
      const expected = "bgdtc";
      const actual = caesar(input, shift, encode = true);
      expect(actual).to.equal(expected);
    })
    it("Should handle a shift to the left", () => {
      const shift = -2;
      const input = "team four";
      const expected = "rcyk dmsp";
      const actual = caesar(input, shift, encode = true);
      expect(actual).to.equal(expected);
    })
  })

  describe("decoding", () => {
    it("should maintain spaces throughout", () => {
      const shift = 2
      const input = "vgco hqwt" // this is wrong
      // const input = "pawi bkqn"
      const expected = "team four"
      const actual = caesar(input, shift, encode = false)
      expect(actual).to.equal(expected)
    })
    it("Should handle nonalphabetical symbols", () => {
      const shift = 2
      const input = "vgco hqwt"
      const expected = "team four"
      const actual = caesar(input, shift, encode = false)
      expect(actual).to.equal(expected)
    })
    it("Should ignore capital letters", () => {
      const shift = 2
      const input = "Vgco Hqwt"
      const expected = "team four"
      const actual = caesar(input, shift, encode = false)
      expect(actual).to.equal(expected)
    })
    it("Should handle shifts that go off the alphabet and should loop back around", () => {
      const shift = 2
      const expected = "zebra"
      const input = "bgdtc"
      const actual = caesar(input, shift, encode = false)
      expect(actual).to.equal(expected)
    })
    it("Should handle a shift to the left", () => {
      const shift = -2
      const expected = "team four"
      const input = "rcyk dmsp"
      const actual = caesar(input, shift, encode = false)
      expect(actual).to.equal(expected)
    })
  })

})