let arr = [5, 2, 1, -10, 8];


let result = arr.sort(function(a,b){
   if(b-a>=0)
       return true;
    else
        return false;
});

console.log(result);