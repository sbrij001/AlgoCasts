// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


// take in the arg of a string
// return a capitalized version of this string
// each word in the sent should be capitalized

// 1. split the string into an arr
// 2. map thru the arr and capitalize each word in the array
//    use the slice method to break apart word 
// 3. join array to turn it back into a string.
// 4. return newly capitalized string.

function capitalize(str) {
  let arrOfWords = str.split(" ").map((word) => {
    return word[0].toUpperCase() + word.slice(1)
  })
  return arrOfWords.join(" ");
}

module.exports = capitalize;
