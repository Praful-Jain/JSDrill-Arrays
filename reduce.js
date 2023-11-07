function reduce(numbers, callback, startingValue) {
    var index;
    if(startingValue == undefined){
      startingValue=numbers[0];
      index=1;
    }
    else{
        index=0;
    }

    while(index<numbers.length)
    {
        startingValue = callback(startingValue,numbers[index]); 
        index++;
    }
    return startingValue;
}


const numbers = [1, 2, 3, 4, 5, 5];
const sum = reduce(numbers,(startingValue,item) => {
    return (startingValue + item);
});
console.log(sum);