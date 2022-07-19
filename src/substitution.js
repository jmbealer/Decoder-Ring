// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  function substitution(input, alphabet, encode = true) {
    // check if alphabet exist or length no 26
    if(!alphabet || alphabet.length !== 26) return false;
    // string of normal alphabet
    const myAlphabetStr = "abcdefghijklmnopqrstuvwxyz";
    // spreading myAlphabet to an array
    const myAlphabetArr = [...myAlphabetStr];
    // spreading input into an array for iteration
    const inputArr = [...input.toLowerCase()];
    // spreading parameter alphabet into an array
    const codedAlphabetArr = [...alphabet];
    // for storing my result for returning at the end
    let result = [];

    // check for unique letter and get the length
    const uniqueArr = codedAlphabetArr.filter((char, idx, arr) => arr.indexOf(char) == idx).length;
    // if uniqueArr doesnt contain 26 return false
    if(uniqueArr !== 26) return false;

    // encode
    if (encode){
      // iterate of inputArr; to get letter
      inputArr.forEach(letter => {
        // if letter is a space; push space to result
        if (letter === " ") result.push(" ");
        // get the idx of the letter; idx of myAlphabet
        const myAlphabetIdx = myAlphabetArr.indexOf(letter);
        // matching the idx in the coded array
        const codedChar = codedAlphabetArr[myAlphabetIdx];
        console.log(codedChar)
        result.push(codedChar);
    })
    return result.join("");
    // decode
    }else {
      inputArr.forEach(letter => {
        // if letter is space push space
        if (letter === " ") result.push(" ");
        // get the idx of the letter
        const codedIdx = codedAlphabetArr.indexOf(letter)
        // matching the idx in the coded array 
        const myAlpChar = myAlphabetArr[codedIdx]
        result.push(myAlpChar)
      })
      return result.join("")
    }


  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
