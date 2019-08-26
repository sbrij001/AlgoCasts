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

// function accepts the arg of a single int
// log a step shape in the form of a string
// the step has to have spaces on the right hand side

// Psuedocode
// Create the function that accepts n
// Create a variable called shape that will be an array
// Loop thru up until n
// Add a # to shape
// create a helper method that will loop thru n and add a space each time it iterates
// Call helper function in steps 
// Console log steps after we loop


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
