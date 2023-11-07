function filter(numbers, callback) {
    const res = [];
    for(let index=0; index<=numbers.length; index++)
    {
        if(callback(numbers[index])){
            res.push(numbers[index]);   //modifying a const value is allowed __ re-initializing in not allowed
        }
    }
    return res;
}


const numbers = [1, 2, 3, 4, 5, 5];
const res = filter(numbers, (item) => {
    return (item%2 === 0);
});
console.log(res);