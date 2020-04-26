var myPow = function(x, n) {
   // logic goes here
    
    if(n===1){
        return x;
    } else{
        return x* myPow(x,n-1);
    }
};

console.log(myPow(4,3));