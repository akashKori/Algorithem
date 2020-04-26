let a = 'akash';

var toUpper = function(str) {
let myStr= '';
let i =0;
for( let k of str) {
if(i===0) {
 myStr= myStr+ k.toUpperCase();
 } else {
 myStr= myStr + k;
 }
 i++;
}
return myStr;
}


console.log(toUpper(a));