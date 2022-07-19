const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution() written by Team 4", () =>{

  describe("error handling", () => {
    it("should return false if alphabet argument not there", () =>{
      const input = "thinkful";
      const actual = substitution(input);
      expect(actual).to.be.false;
    })
    it("should return false if alphabet isnt 26 characters long", () =>{
      const input = "thinkful";
      const alphabet = "short";
      const actual = substitution(input, alphabet);
      expect(actual).to.be.false;
    })
    it("should return false if alphabet doesn't contain unique characters", () =>{
      const input = "thinkful";
      const alphabet = "abcabcabcabcabcabcabcabcyz";
      const actual = substitution(input, alphabet);
      expect(actual).to.be.false;
    })
  })
  describe("encoding", () => {
    it("should encode a message using substitution alphabet", () =>{
      const input = "thinkful";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const actual = substitution(input, alphabet);
      const expected = "jrufscpw";
      expect(actual).to.equal(expected);
    })
    it("should work with unique characters", () =>{
      const input = "message";
      const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
      const actual = substitution(input, alphabet);
      const expected = "y&ii$r&";
      expect(actual).to.equal(expected);
    })
    it("should preserve spaces", () =>{
      const input = "You are an excellent spy";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const actual = substitution(input, alphabet);
      const expected = "elp xhm xf mbymwwmfj dne";
      expect(actual).to.equal(expected);
    })
    it("Should ignore capital letters", () => {
      const input = "Thinkful";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const actual = substitution(input, alphabet);
      const expected = "jrufscpw";
      expect(actual).to.equal(expected);
    })
  })
  describe("decoding", () => {
    it("should decode a message using substitution alphabet", () =>{
      const input = "jrufscpw";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const actual = substitution(input, alphabet, false);
      const expected = "thinkful";
      expect(actual).to.equal(expected);
    })
    it("should work with unique characters", () =>{
      const input = "y&ii$r&";
      const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
      const actual = substitution(input, alphabet, false);
      const expected = "message";
      expect(actual).to.equal(expected);
    })
    it("should preserve spaces", () =>{
      const input = "elp xhm xf mbymwwmfj dne";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const actual = substitution(input, alphabet, false);
      const expected = "you are an excellent spy";
      expect(actual).to.equal(expected);
    })
    it("Should ignore capital letters", () => {
      const input = "Y&ii$r&";
      const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
      const actual = substitution(input, alphabet, false);
      const expected = "message";
      expect(actual).to.equal(expected);
    })
  })

})