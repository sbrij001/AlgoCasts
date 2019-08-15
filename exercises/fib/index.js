// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// only return the nth entry in the fib series
// add together previous and current to get next num in sequence

// 1. create an arr called total that will store the values
// 2. since fib will always start with 0 & 1 set total to equal these values.
// 3. create a for loop that starts at 2 and iterates up to and including n
// 4. create variables to store the values u need to add up
// 5. push the total of those values into total.
// return total.

function fib(n) {
  const total = [0,1];

  for (let i = 2; i <= n; i++) {
    let val1 = total[i - 1]
    let val2 = total[i - 2]
    total.push( val1 + val2);
  }
  return total[n];
}

module.exports = fib;
