let gcd= 0;
let high = 20;
let low = 10;
if(high%low ==0) {
gcd = low;

console.log('here',gcd);
return;
}

for(let i =1 ; i< low; i++) {
 let divisor = 1;
 divisor = low/i;
 if( high%divisor==0) {
  gcd = divisor;
  console.log(gcd);
  return;
 }
}

