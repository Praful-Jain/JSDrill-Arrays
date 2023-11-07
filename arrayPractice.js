// const numbers = [1,2,3,4,5];

// numbers.forEach(print);
// function print(item, index, arr){
//     console.log('numbers['+ index + '] = '+item);
// };


// numbers.forEach((item, index, arr) => {
//     console.log('numbers['+ index + '] = '+item);
// });

// numbers.forEach((item, index, arr) => {
//     console.log(arr);
// });

// var sum=0;
// numbers.forEach((item, index, arr) => {
//     sum+=item;
// });
// console.log(sum)


// const char = ['a','a','b','b','b','c','b','d','a','c'];
// var count={};
// char.forEach((item, index, arr) => {
//     if(count[item])
//         count[item]++;
//     else
//         count[item]=1;
// });
// console.log(count);


// const numbers = [1,2,3,4,5];
// const doubleNumbers = numbers.map((item) =>{    return item*2;     });
// console.log(doubleNumbers);


// const numbers = [1,2,3,4,5];
// const doubleNumbers = numbers.map(item =>    item*2     );
// console.log(doubleNumbers);


// const product =[
//     {
//         name: 'dell',
//         price: 1000,
//         count: 5
//     },
//     {
//         name: 'hp',
//         price: 2000,
//         count: 8
//     },
//     {
//         name: 'lenovo',
//         price: 1500,
//         count: 3
//     }
// ];
// const cost = product.map(item => ({
//     name:item.name, 
//     costing:item.count*item.price
// }));
// console.log(cost);



// const letters = ['1','2','3','4','5'];
// const numbers = letters.map(item => Number(item) );   // or     letters.map(Number);
// console.log(numbers);


// const numbers = [1,3,1,0,5,4,3,2,1,3,2,0,,0,5,4,6,8,0,5,4,6,8];
// const nonzero = numbers.filter(item => item!=0);
// console.log(nonzero);

// const numbers = [1,3,1,0,5,4,3,2,1,3,2,0,,0,5,4,6,8,0,5,4,6,8];
// const nonzero = numbers.filter(item => item%2==0);
// console.log(nonzero);



// const product =[
//     {
//         name: 'dell',
//         price: 1000,
//         count: 5
//     },
//     {
//         name: 'hp',
//         price: 2000,
//         count: 8
//     },
//     {
//         name: 'lenovo',
//         price: 1500,
//         count: 3
//     }
// ];
// const arr = product.filter(item => item.price>1200);
// console.log(arr);


// const numbers = [1,3,1,0,5,4,3,2,1,3,2,0,,0,5,4,6,8,0,5,4,6,8];
// const nums = numbers.filter((item, index, arr) => arr.indexOf(item)===index);
// console.log(nums);


//const numbers = [1,3,1,0,5,4,3,2,1,3,2,0,0,5,4,6,8,0,5,4,6,8];
// const sum = numbers.reduce(addition,0);
// function addition(accumulator, value)
// {
//     return accumulator + value;
// }
// console.log(sum);


// const numbers = [1,3,1,0,5,4,3,2,1,3,2,0,0,5,4,6,8,0,5,4,6,8];
// const sum = numbers.reduce((accumulator,item) => accumulator+item );
// console.log(sum);

// const product =[
//         {
//             name: 'dell',
//             price: 1000,
//             count: 5
//         },
//         {
//             name: 'hp',
//             price: 2000,
//             count: 8
//         },
//         {
//             name: 'lenovo',
//             price: 1500,
//             count: 3
//         }
//     ];
// const sum = product.reduce( (accumulator, item) => accumulator+item.price , 0);
// console.log(sum);

// const numbers = [1,3,105,10,5,1,0,5,4,3,2,1,3,2,0,0,5,4,6,8,0,5,4,6,8];
// //numbers.sort();   --this will work only on array of strings
// numbers.sort( (a,b) => a-b);    
// console.log(numbers);

// function fillInNumbers(n){
//     return  Array(n).fill(0).map( (item,index) => index+1 );
// }
// console.log(fillInNumbers(10));


// const str = 'abcde';
// const arr = str.split('');
// console.log(arr);

// const names=['Raj','Aman','Rohit','Ajay']
// const res = names.find(item => item==='Raj');
// console.log(res);