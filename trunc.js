let a = 'What Id like to tell on this topic is:';

var truct = function(str, len) {
 this.str= str;
 return this.str.slice(0,this.len);
}

console.log(truct(a,20));

console.log(a.slice(0,2));