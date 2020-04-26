let a = [1,2,3,4,1,1,2,3,4,2,10,20,21,22,20,20];
let b = [];
b.push(a[0]);

for(let i =0; i< a.length; i++) {
let isExist = false;

for(let k=0 ; k< b.length; k++) {
if(b[k] === a[i])
isExist= true;
}
if(!isExist)
b.push(a[i]);
}

console.log(b);