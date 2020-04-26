var Person = function(firstName, lastName) {
this.firstName= firstName;
this.lastName= lastName;
}
var showName = function() {
return this.firstName+ ''+ this.lastName;
}

Person.showName1= showName;

var persone1 = new Person('akash', 'kori');

console.log(persone1.showName1());
