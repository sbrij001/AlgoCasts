// create a merger function that will merger two arrays into one

// pseudocode
// 1. create a merge array that will be returned
// 2. if the values in the first array is smaller than the values in the second array
// push the values in to the results then move onto the next
// 3. if the values in the first array is larger than the values in the second array
// push the values of the second array into the results then move onto the next
// 4. once we exhaust the array, push all the remaining values from the other array

function mergeArrays(arr1, arr2){
  const merged = [];
  let i = 0;
  let j = 0;

  // base cases
  if (arr1.length === 0) {
      return arr2;
  }
  if (arr2.length === 0) {
      return arr1;
  }
  // loops both array at the same time
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i])
      i++
    }else {
      merged.push(arr2[j])
      j++
    }
  }

  while (i < arr1.length) {
    merged.push(arr1[i])
    i++
  }
  while (j < arr2.length) {
    merged.push(arr2[j])
  }
  return results
}
