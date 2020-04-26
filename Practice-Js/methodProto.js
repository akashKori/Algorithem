let animal = {
    eats: true,
}

var animal1 = Object.create(animal,{walk: {value:true}});

console.log(animal1.walk);
console.log(Object.getPrototypeOf(animal1)==animal);


function sayHi(){
    console.log('Hi buddy');
};

function Checking(rel){
    rel();
}

Checking(sayHi);