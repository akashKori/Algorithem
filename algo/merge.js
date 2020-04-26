let a = [1,2,3,4,5];
let b= [2,3,6,6,7];
let c = [];
let i=0, j=0, k=0;
for(; i< a.length && j<b.length ;) {
  if(a[i]<b[j]) {
   c.push(a[i]);
   i++;
  } else {
   c.push(b[j]);
   j++;
  }
  k++;
}
while(i<a.length) {
c.push(a[i]);
i++;
}

while(j<b.length) {
c.push(b[j]);
j++;
}

console.log(c);