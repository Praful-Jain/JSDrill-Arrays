function each(numbers, callback) {
    for (let index = 0; index < numbers.length; index++) {
      callback(numbers[index], index);  //passing array element and it's index to the callback function
    }
}


const numbers = [1, 2, 3, 4, 5, 5];
each(numbers, (item,index) => {
    console.log(`number[${index}] = ${item}`);
    //console.log('numbers[' + index + '] = ' + item);    
})
