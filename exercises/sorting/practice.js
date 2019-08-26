
  // Write an Array #dups method that will return a hash containing the indices of all
  // duplicate elements. The keys are the duplicate elements; the values are
  // arrays of their indices in ascending order, e.g.
  // [1, 3, 4, 3, 0, 3, 0].dups => { 3 => [1, 3, 5], 0 => [4, 6] }

  // create a function called dups
  // accepts an arg of an arr
  // return a hash

  //create the hash i will be returning
  // loop thru my arr
  // create the hash with key
  // if the key exists i will set the value of the key to the index of that ele
  // return mu hash

  function dup(arr){
    const duplicates = {};
    let sorted = arr.sort((a,b) a -b)
    [0,0,1,3,3,4,5]
    for( let i = 0; i < arr.length; i++){
      let first = arr[0];
      let second = arr[first + 1];
      if(first === second){
        duplicates[first] = i;
        first = arr[i + 1];
        second = arr[first + 1]
      }
    }
  }
