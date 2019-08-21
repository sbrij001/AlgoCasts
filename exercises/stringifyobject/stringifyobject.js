// accepts an arg of an object
// returning an obj?
// loop thru the object
// check if the ele is a number if it is convert it to a string using toString.
function stringifyObject(object){
  for(let key in object){
    if(typeof(object[key]) === 'number'){
      console.log(object[key])
      let num = object[key];
      object[key] = num.toString()
    }
  }
  return object
}

const object = {
  key: 1,
  key1: 'shivani',
  key2: 2,
  key3: 'Brijmohan',
  key4: 6
}
stringifyObject(object)
