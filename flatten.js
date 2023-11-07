var res = [];
function flatten(numbers) {
    for(let index=0; index<numbers.length; index++){
        const element = numbers[index];

        if(Array.isArray(element)){
            flatten(element);
        }
        else{
            res.push(element)
        }
    }
    return res;
}


const nestedArray = [1, [2], [[3]], [[[4,5],[6,[7]]]]]; // use this to test 'flatten'
const flatArray = flatten(nestedArray);
console.log(flatArray);