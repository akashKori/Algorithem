let myArr = [{id: 10, name:'akash'},{id:9, name: 'vikash'},{id:6, name: 'bankuru'},{id:2, name:'bala'}];
myArr.sort(function(a,b){ return a.id-b.id});
console.log('ascending',myArr);


let myArr1 = [{id: 2, name:'akash'},{id:3, name: 'vikash'},{id:4, name: 'bankuru'},{id:5, name:'bala'}];
myArr1.sort(function(a,b){  return b.id-a.id });
console.log('descending',myArr1);


let myArr2 = [{id: 2, name:'akash'},{id:3, name: 'vikash'},{id:4, name: 'bankuru'},{id:5, name:'bala'}];
myArr2.sort(function(a,b){
if(b.id>a.id)
return true;
else
return false;
});

console.log('descending',myArr2);

let myArr3 = [{id: 10, name:'akash'},{id:9, name: 'vikash'},{id:6, name: 'bankuru'},{id:2, name:'bala'}];
myArr3.sort(function(a,b){
if(a.id>b.id)
return true;
else
return false;
});
console.log('Ascending',myArr3);