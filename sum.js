let salaries= {
akash: 100,
rohit: 120,
bhaskar: 110,
amru: 130
}

function sum(mySalary) {
var salary = 0;
for(key in mySalary) { 
 salary = salary + mySalary[key];
}
return salary;
}

console.log(sum(salaries));