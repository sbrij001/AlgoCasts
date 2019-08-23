// create a function called bubble sort that takes in an array
// start looping with an var called i the end of the array towards the beg
// start an inner loop with a var called j from the begining until i - 1
// if array of j is greator than arr[j + 1] swap those two values.
// return the sorted array

function bubbleSort(arr){
  for( let i = arr.length; i > 0; i-- ){
    for(let j = 0; j < i - 1; i++){
      if(arr[j] > arr[j + 1]){
        //SWAP
      let temp = arr[j]
      arr[j] = arr[j + 1]
      arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
