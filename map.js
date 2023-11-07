function map(numbers, callback) {
    const doubleNum = [];
    for(let index=0; index<numbers.length; index++)
    {
        var item = callback(numbers[index]);
        doubleNum.push(item);   //modifying a const value is allowed __ re-initializing in not allowed
    }
    return doubleNum;
}


const numbers = [1, 2, 3, 4, 5, 5];
const doubleNum = map(numbers, (item) => {
    return item*2;
});
console.log(doubleNum);

