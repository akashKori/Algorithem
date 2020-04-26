let myArr = [2,4,14,8,8,1];


function BubbleSort(myArr) {
    // Logic goes here
    
    for(let outer=0; outer< myArr.length -1; outer++ ){
        for(let inner= 0; inner< myArr.length -1;inner++){            
            if(myArr[inner]>myArr[inner+1]){
                let temp = myArr[inner];
                myArr[inner] = myArr[inner+1];
                myArr[inner+1]= temp;                
            }
        }
    }
    return myArr;
}

let result = BubbleSort(myArr);

console.log(result);