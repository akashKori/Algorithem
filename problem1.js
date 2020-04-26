var user= new Object();
user.name= 'jhon';
user.surname='smith';

user.name= 'pete';
delete user.name;

var person={};

function isEmpty(myObj){
 var isEmpty = false;
 for(key in myObj) {
   isEmpty = true;
 }
 return isEmpty;
}

console.log(isEmpty(user));

console.log(isEmpty(person));

