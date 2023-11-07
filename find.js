function find(numbers, callback) {
    for(let index=0; index<numbers.length; index++)
    {
        if(callback(numbers[index]) === true){
            return numbers[index];
        }
    }
}


const numbers = [1, 2, 3, 4, 5, 5];
const res = find(numbers, (item) => {
    return (item > 4);
});
console.log(res);