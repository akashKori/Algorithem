function Employee(firstName, lastName) {
 this.firstName = firstName;
 this.lastName =  lastName;
}

Employee.prototype.getName = function() {

return this.firstName+ "" + this.lastName;

}

var e1 = new Employee("akash", "kori");
var e2 = new Employee("keya", "mondal");

console.log(e1.getName());
console.log(e2.getName()); 