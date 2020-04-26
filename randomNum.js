let a = 1;

let b = 5;

var random = function(a,b) {
 let random =a; 
 random = Math.random(a,b);
 console.log(typeof(random));
 random+= parseInt(a);

 console.log( Math.round(random)); 
}


random(a,b);