function bee(wordlist, puzzles){
  let count = 0;
  let result = [];
  let uniq = true;

  for(let i = 0; i <puzzles.length; i++){
    for(let j = 0; j < wordlist.length; j++){
      if(wordlist[j].includes(puzzles[i].charAt(0))){
        for(k = 0; k < wordlist[j].length; k++){
          if(!puzzles[i].includes(wordlist[j][k])){
            uniq = false;
          }
        }
      }else{
        uniq = false;
      }

      !uniq ? count : count += 1;
      uniq = true;
    }
    result.push(count);
    count = 0;
  }
  return result;
}
