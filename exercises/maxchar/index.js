// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


// 1. create a hash
// 2. save all of the character into the hash
// 3. if the char in the hash exists increment by 1
// 4. else set the value to 1
// 5. create a max var to save max num
// 6. create a maxChar var to save the character with the max char
// 5. loop thru the resulting hash saving the char and the value of the char in max
function maxChar(str) {
  const charHash = {};
  let max = 0;
  let maxChar = '';

  for(i of str){
    character = i
    if(charHash[character]){
      charHash[character]++
    }else {
      charHash[character] = 1
    }
  }
  for(char in charHash){
    if (charHash[char] > max) {
      max = charHash[char]
      maxChar = char
    }
  }
  return maxChar;
};

module.exports = maxChar;
