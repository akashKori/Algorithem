var myArray = "akash";
myArray = myArray.split('');

let length = myArray.length;
let midLength = (length+1 )/2;
// console.log(length);

for( let i=0; i< length ; i++) {
 let temp = myArray[length -i-1];
 myArray[length -1] = myArray[i];
 myArray[i] = temp;
 //length--;
 console.log(temp);
}

myArray = myArray.join('');
console.log(myArray);