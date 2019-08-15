// solve fib using recursion

function fib(n){
  // only return a number when n is less than 2 
  if (n < 2){
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}
