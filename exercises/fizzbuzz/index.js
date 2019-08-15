// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

// takes in an arg of n
// console log the numbers and cases of fizzBuzz, fizz and, buzz
// mults of 3 print fizz instead of num
// mults of 5 print buzz instead of num
// if the num is a mult of 3 & 5 print fizzBuzz

// 1. loop thru n
// 2. use a conditional statement that checks
//    if the ele is mod 3 & mod 5 log fizzBuzz
//    if ele is only mod 3 log fizz
//    if ele is only mod 5 log buzz
//    if the num is not mod 3 or 5 log num
function fizzBuzz(n) {
  for(i = 1; i <= n; i++){
    if ((i % 3 === 0) && (i % 5 === 0)) {
      console.log('fizzbuzz')
    }else if(i % 3 === 0){
      console.log('fizz')
    }else if (i % 5 === 0) {
      console.log('buzz')
    }else {
      console.log(i)
    }
  }
};

module.exports = fizzBuzz;
