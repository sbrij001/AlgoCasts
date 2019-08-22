// this function accepts a sorted array and a value
// create a left pointer at the start of the array
// create a right pointer at the end of the array
// loop thru the array and check if middle ele is the same as the ele arg.
// if ele is equal to middle return index
// else value is to small move left up if value is too large move down.

//Edge Cases
// What if the arr ele is a decimal?
// What if the ele is not in the array?

function binarySearch(arr, ele){
  let left = 0;
  let right = arr[arr.length - 1];
  let middle = Math.floor((left + right)) / 2

  while( arr[middle] !== ele && left <= right){
    if(ele < arr[middle] ){
      right = middle - 1;
    } else {
      left = middle + 1;
    }
    middle = Math.floor((left + right)) / 2
  }
  if(arr[middle] === ele){
    return middle
  }else{
    return -1;
  }
}

binarySearch([1,2,3,4,5,6,7,8], 5);
