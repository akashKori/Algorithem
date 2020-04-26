let person = {
    name: 'akash'
};

function Salary(){
    this.basic= '200'
};

Salary.prototype = person;

var s1 = new Salary();

console.log(s1.basic)

console.log(s1.name)
