var Calc = function(num1, num2){
 this.num1= num1;
 this.num2= num2;
 this.sum = function(){
 return this.num1+ this.num2;
 }
 this.mul= function() {
 return this.num1* this.num2;
 }
}

var calc1 = new Calc(10,20);

console.log(calc1.sum());
console.log(calc1.mul());


