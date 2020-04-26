var t = 'akash';

var b= "Kori";
var sum = function(a,b){
 this.a= a;
 this.b =b;
return this.a+ this.b;
}

var x = `nam to suna hi hoga ${sum(1,2)}`;


console.log(t);
console.log(b);
console.log(sum(4,5));
console.log(x);