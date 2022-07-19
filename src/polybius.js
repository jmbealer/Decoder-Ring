// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    const inputArr = [...input.toLowerCase()]
    const codedArr = [
      ["a", "f", "l", "q", "v"],
      ["b", "g", "m", "r", "w"],
      ["c", "h", "n", "s", "x"],
      ["d", "ji", "o", "t", "y"],
      ["e", "k", "p", "u", "z"]
    ]
    let storingArr = []

// checking if encode true or false
if (encode) { 
  let storingArr = []
  inputArr.forEach(letter => {
    if(letter === "j" || letter === "i") {
      storingArr.push(42)
    } else if (letter === " ") {
      storingArr.push(" ")
    } else {
    const row = codedArr.findIndex(row => row.includes(letter))
    const col = codedArr[row].indexOf(letter)
    storingArr.push(row+1, col+1)
    }
  })
  return storingArr.join("")

// decode
  } else { 
      //for storing idx 
      let storingArr = []
      // for storing the message
      let decodeMess = []
      // counting the numbers in stored array
      let count = 0
      inputArr.forEach((num, idx) => {
        // check for space and push it
        if (num === " ") {
          decodeMess.push(" ")
        } else {
          // push num to storing array
          storingArr.push(num)
          count++
        }
        if (storingArr.length === 2) {
          let row = storingArr[0]
          let col = storingArr[1]
          decodeMess.push(codedArr[row-1][col-1])
          // empty the storingArr
          storingArr = []
        }
      })
      return count % 2 === 0 ? decodeMess.join("") : false
  } 

  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };

