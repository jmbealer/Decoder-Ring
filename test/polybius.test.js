const { expect } = require("chai")
const { polybius } = require("../src/polybius")

describe("polybius() tests written by Team 4", () => {

  describe("encoding", () => {
    it("should encode letter to number pair", () => {
      const input = "thinkful";
      const actual = polybius(input);
      expect(actual).to.be.a("string");
    })
    it("should translate both 'i' and 'j' to 42", () => {
      const input = "thinkful";
      const expected = "4432423352125413";
      const actual = polybius(input);;
      expect(actual).to.equal(expected);
    })
    it("should leave spaces as is", () => {
      const input = "Hello world";
      const expected = "3251131343 2543241341";
      const actual = polybius(input);
      expect(actual).to.equal(expected);
    })
    it("Should ignore capital letters", () => {
      const input = "Thinkful";
      const expected = "4432423352125413";
      const actual = polybius(input);;
      expect(actual).to.equal(expected);
    })
  })

  describe("decoding", () => {
    it("should decode number pair to letters", () => {
      const input = "3251131343 2543241341";
      const expected = "hello world";
      const actual = polybius(input, false);
      expect(actual).to.equal(expected);
    })
    it("should translate 42 into 'i' and 'j'", () => {
      const input = "4432423352125413";
      const actual = polybius(input, false);
      expect(actual).to.include("i");
      expect(actual).to.include("j");
    })
    it("should return false if the length of all number is odd", () => {
      actual = polybius("44324233521254134", false);
      expect(actual).to.be.false;
    })
  })

})


