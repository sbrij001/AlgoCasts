// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  //reduce takes in 2 args, an arrow func and the starting initial arg
  //whenever reduce runs it's going to take in the starting arg an pass it into the arr func as the first arg.
  return str.split("").reduce((rev, char) => char + rev, '')
}

module.exports = reverse;


//first solution *easiest*
// function reverse(str) {
//   // let strArr = str.split("");
//   // let reversed = strArr.reverse().join("");
//   // return reversed;
//   return str.split("").reverse().join("");
// }

//Second solution
// function reverse(str) {
//   let reversed = ""
//
//   for (char of str) {
//     reversed = char + reversed;
//   }
//   return reversed
// }
