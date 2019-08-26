// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0


// accept an argument of a string
// return the number of vowels used in the string
// will the string consist of only letters?
// should I solve for the case of an empty string?
//Should i account for caps?
// ex ‘I like green eggs and ham.’ => 8

// Pseudocode
  // Save a new string without punct and spaces in a variable
  // Create a variable called count that will increase every time we encounter a vowel.
  // Create a var called vowels that store all of the vowels
  // Loop thru the string
  // Create a conditional if vowels.includes(char) increase count.
  // Return count


  function vowels(str){
    const cleanStr = str.replace(/[,./?;{}’ ]/g, "");
    const newStr = cleanStr.toLowerCase();
    let count = 0;
    const vowels = 'aeiou';
    for(let char of newStr){
      if(vowels.includes(char))count++
    };
    return count
  };

module.exports = vowels;
