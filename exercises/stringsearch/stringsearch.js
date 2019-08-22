// define a function that takes in 2 args
// the larger sting, and the pattern we're looking for
// loop over the long string
// loop over the short string
// if the characters dont match break out of the inner loop
// if they do match move on to the next char til u hit the end of the short string
// if u do hit the end of the short string u have found a match
// increment the count of matches
// return the count

function stringSearch(largeStr, pattern){
  let match = 0;

  for(let i = 0; i < largeStr.length; i++){
    let char = largeStr[i];
    let char2 = pattern[j];
    for( let j = 0; j < pattern.length; j++){
      if(char === char2){
        char = largeStr[i + 1];
        char2 = pattern[j + 1]
      }else {
        break;
      }
        match += 1;
    }
  }
  return match;
}
