function sumRest(...args) {
    // logic goes here
    
    let  sum= 0;
    for(let arg of args){
        console.log(arg);
        sum+=arg;
        
    }
    return sum;
}

let result1 = sumRest(1,2,3,4);
console.log('result1', result1);


let result2 = sumRest(1,2);
console.log('result2', result2);
