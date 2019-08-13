// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// given a num and func must return int
// when reversing numbers containing 0's
// one must get rid of 0s
// take into account negatives

// turn the number into a string and arr
// reverse the arr
// check if the num is pos or neg
// if neg make sure to add the - at index 0
// use .replace to get rid of 0s


function reverseInt(n) {
  let reversed = n.toString().split("").reverse().join("");

  return parseInt(reversed) * Math.sign(n)
};


module.exports = reverseInt;
