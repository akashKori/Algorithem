let myArr = [1,2,3,4,5,9,0,9,2];

function filArr(myArr, minVal, maxVal) {
    
    return myArr.filter(function(item){
        if(item>= minVal && item <= maxVal)
            return item;
    } )
}

let result = filArr(myArr, 1,4);
console.log(result);