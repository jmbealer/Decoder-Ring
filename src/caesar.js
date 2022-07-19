// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  function caesar(input, shift, encode = true) {
    // lower casing input
    let lowercasedMessage = input.toLowerCase()
    // result
    let message = ""

    // error handling
    if(!shift || shift < - 25 || shift > 25 ) return false;

    // checking to encode or decode
    if (encode === false) shift *= -1

    // iterating over input
    for (let i = 0; i < input.length; i++) {
      // get char code while setting input to lowercase
      const codedMessage = lowercasedMessage.charCodeAt([i])
      // adding char code with shift
      const shifted = codedMessage + shift
      // checking letter and shifted
      if (/[a-zA-Z]/.test(input[i])) {
        //  shifted greater than 122 min 26
        if (shifted > 122) {
          message += String.fromCharCode(shifted - 26);
        //  shifted less than 97 add 26
        }else if ( shifted < 97) {
          message += String.fromCharCode(shifted + 26);
        } else {
          message += String.fromCharCode(shifted);
        }
      } else {
        message += String.fromCharCode(codedMessage);
      }
    }
    return message
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
