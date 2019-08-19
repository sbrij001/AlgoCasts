// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


// 1. create a an arr (chunked) to return
// 2. loop thru the arr in the first arg
// 3. retrieve the last element in the chunked array
// 4. if the last ele is undefined or if the length of it is
//    equal to chunk size, push a new chunk into chunked
//    with he current ele.
// 4. else add the current ele to the chunk
// time complexity => linear
function chunk(array, size) {
  const chunked = [];

  for(let num of array){
    let last = chunked[chunked.length -1];

    if (!last || last.length === size) {
      chunked.push([num])
    }else {
      last.push(num)
    }
  }
  return chunked;
};

module.exports = chunk;
