function nestedEvenSum(object){
    let sum = 0;
    let arrayOfNumbers = Object.values(object);
    for(let i = 0; i < arrayOfNumbers.length; i++){
        if(typeof(arrayOfNumbers[i]) === 'object'){
            sum += nestedEvenSum(arrayOfNumbers[i])
        }else {
            if(arrayOfNumbers[i] % 2 === 0){
                sum += arrayOfNumbers[i];
            }
        }
    }
    //console.log('sum',sum);
    return sum;
}
const object = {
  num2: 2,
  num3:
  {
    num1: 1,
    num4: 4
  },
  num: 5
}
nestedEvenSum(object)
