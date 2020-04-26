var myObje = {'name':'akah'};

var age = {'age': 30};

var salary ={'salary': 100};

Object.assign(myObje, age,salary);

age.age=40;

console.log(myObje);

var d = Object.assign(myObje, age, salary);

console.log(d);