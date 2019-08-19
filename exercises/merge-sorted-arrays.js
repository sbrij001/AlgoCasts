// my friend Alice and I are going to merge our Girl Scout Cookies orders and enter as one unit.
// Each order is represented by an "order id" (an integer).
// We have our lists of orders sorted numerically already, in arrays.
// Write a function to merge our arrays of orders into one sorted array.

// example
// const myArray = [3, 4, 6, 10, 11, 15];
// const alicesArray = [1, 5, 8, 12, 14, 19];
// console.log(mergeArrays(myArray, alicesArray));
// solution => [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]

// create a function called merger that accepts 2 args that are both an array of integers
// return 1 array of integers
// use the concat method to merge both arrays
// use the sort method to sort the arrays
// return merged and sorted array

// time complexity is o(log n) where n is the total length of our output array. 
function mergeArrays(array1, array2){
  let mergedArr = array1.concat(array2);
  let sortedArr = mergedArr.sort((a - b) => a - b);
  return sortedArr;
}
