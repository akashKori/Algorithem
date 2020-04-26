let userInfo ={
    firstName: 'akash',
    lastName:'kori',
    age:31,
    city:'bangalore'
};

let result = Object.defineProperty(userInfo,'age',{
    value: 32,
    writable:false,
    configurable:false,
    enumerable:false
});


console.log(result);
console.log(userInfo.age);

userInfo.age = 33;
console.log(userInfo.age);


let info={
    firstName: 'akash',
    toString(){
        return this.firstName
    }
}
Object.defineProperty(info,'toString',{
    enumerable:false
})

console.log(info.toString());
for(var ite in info.toString()){
    console.log(ite);
}