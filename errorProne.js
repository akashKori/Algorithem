var myObj = {
name: 'akash',
surName: 'kori',
age: 30
}

for(key in myObj) {
console.log(myObj[key]);
}


var person = {
name: 'jhone',
surName: 'snow',
}

var otherPerson = person;

for( key in otherPerson) {
console.log(otherPerson[key]);
}