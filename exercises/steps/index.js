// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n){
  const shape = [];
  for(let i = 0; i <= n; i++) {
    let spaces = (n - i)
    shape.push("#" + numberOfSpaces(spaces))
    console.log(shape)
  }
}

function numberOfSpaces(n){
  let numOfSpa = (n - 1);
  const string = [];
  let i = 0;
  while(i < numOfSpa){
    string.push(" ");
    i++
  }
return string.join(" ")
}


module.exports = steps;
