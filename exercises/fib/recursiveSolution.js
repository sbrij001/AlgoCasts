// solve fib using recursion
// solve fib using a memoize function

function memoize(fn){
  //DECLARE A STORAGE AREA
  const cache = {};
  return function(...args){
    if(cache[args]){
      return cache[args];
    }
    const result = fn.apply(this, args)
    cache[args] = result;

    return result;
  }
};

function fib(n){
  // only return a number when n is less than 2
  if (n < 2){
    return n;
  }
  return fib(n - 1) + fib(n - 2);
};
fib = memoize(fib);
