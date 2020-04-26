var myObj = {
 num1 : 10,
 num2: 20,
 sum: function(){
 return this.num1+ this.num2;
 },
 mul: function(){
 return this.num1* this.num2;
 }
}

console.log(myObj.sum());
console.log(myObj.mul());