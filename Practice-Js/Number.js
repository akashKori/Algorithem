let fruits = ['apple','banana','pear','grapes'];

let removedArr = fruits.splice(0,0,'lichi','watermelon');

console.log(removedArr);

console.log(fruits);

let arr1 = new Array(1,2,3,4,5,6);

console.log(arr1.slice(1,2));

let user= [
    {id:1, name:'akash'},
    {id:2,name:'rajesh'}
];

let find = user.filter(item=>item.id<3);

console.log(find);

let length =  user.map(l=>l.id);
console.log(length);
console.log(user);


let myArr = [1,2,3,4,5,6];

let sum = myArr.reduce((sum,current)=> sum+current);
console.log(sum);