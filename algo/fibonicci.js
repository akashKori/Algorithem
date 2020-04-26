let k =8;
let a = 0;
let b= 1;
let c = 0;
for(let i=1; i<k ; i++ )
{
  c= a+b;
  a= b;
  b= c; 
console.log(a, b);
}


console.log('kth fibonicci number is ',c);