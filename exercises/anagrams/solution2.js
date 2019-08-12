// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


// linear time complexity
// 1. create a hash
// 2. loop thru str A where the first input will be the char
//    the value will be how many times it appears in a string
// 3. loop thru str B subtracting from the hash the chars in str B
// 4. if there is a char in the hash with a value not equal to 0 return false
// 5. if all the chars in the hash equal 0 return true
function anagrams(stringA, stringB) {
  let newStringA = stringA.toLowerCase().replace(/[ .,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  let newStringB = stringB.toLowerCase().replace(/[ .,\/#!$%\^&\*;:{}=\-_`~()]/g,"");

  let charCount = {};

for (let char in newStringA) {
  let character = char

  if (character in charCount) {
    charCount[character]++
  }else {
    charCount[character] = 1
  }
}

  for (let char in newStringB) {
    let character = char;

    if (character in charCount) {
      charCount[char]--;
    }else {
      return false
    }
  }

  for( let key in charCount){
    if (charCount[key]) {
      return false
    }
  }
  return true;
};

module.exports = anagrams;
