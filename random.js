let person ={
 apple: 20,
 banana: 40,
 name: 'akash',
}

for(key in person) {
 if(typeof ( person[key]) === 'number') {
 person[key] = person[key] *2;
 }
}

console.log(person);