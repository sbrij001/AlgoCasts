// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// first check the length of the string
// no spaces or punctuation
// turn everything to lowercase
// function should return true or false

//1. take str a and b and rid them of spaces and punctuation.
//2. set all the characters of the new string to lowercase.
//3. check the length of both strings and make sure they are equal
//   if not return false
//4. use the .include helper method to check if the chars in str a
//   are the same as str b.
//5. return true or false based on step 3

//time complexity O(logn)
function anagrams(stringA, stringB) {
  let newStringA = stringA.toLowerCase().replace(/[ .,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split("").sort().join("");
  let newStringB = stringB.toLowerCase().replace(/[ .,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split("").sort().join("");
  if (newStringA.length !== newStringB.length) {
    return false
  }
  return newStringA === newStringB;
}

module.exports = anagrams;
