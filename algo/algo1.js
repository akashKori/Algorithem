let myNum = 189981;
var x= 1;
var remainder = myNum;
var newNum = 0;
while(remainder > 0){
 remainder = myNum; 
let y = myNum % (x*10);
 remainder = remainder - y;
 newNum = newNum  + x*y; 
 // console.log(y);
 x= x* 10;
 
 console.log(remainder );
}

console.log(newNum );