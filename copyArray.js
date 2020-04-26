var myObj = {
name: 'akash',
age: 30,
surName: 'kori'
}

var clone= {};

for(key in myObj) {
 clone[key] = myObj[key];
}

console.log(clone);