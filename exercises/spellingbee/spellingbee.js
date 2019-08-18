// recieve 2 args
// Arg of an array of strings (valid english words)
// ex ['apple','please','pleas']
// 2nd argument is an array of strings where each string is a puzzle
// expected an output of array of ints. each number should correspond to how many words can be formed with that string.
// each string in the puzzle will have a key letter which will be the first letter in the puzzle string
// u can reuse chars in puzzle string


// pseudo code
// 1. loop thru puzzles arr and create an object
// 2. create a result array that will return an array of integers
// 3. loop thru the wordlist and check if letters are included in word

function spellingBee(wordlist,puzzles){
  const resuts = [];
  let count = 0;

  for (string of puzzles) {
    for (word of wordlist) {
      if (word.includes(string)) {
        count ++;
      }
    }
  }
  count = 0;
  console.log(count);
}
