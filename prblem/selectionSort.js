let myArr= [2,3,9,8,41,1];
let currentIndex = 0;
let minValue = myArr[0];

function selectionSort(myArr){
    
    // logic goes here
    
    for(let i =0; i< myArr.length; i++){
     minValue = myArr[i];
     currentIndex= i;
        for(let k=i;k<myArr.length;k++){        
            if(myArr[k]<minValue){
              //  console.log(myArr[k]);
                let temp = myArr[k];
                myArr[k]= myArr[currentIndex];
                myArr[currentIndex] = temp;
                minValue= myArr[currentIndex];
            }
        }
    }
    return myArr;;
    
}

let result = selectionSort(myArr);

console.log(result);


// suppose array size is n and since we are using nested for loop then selection sorting complixity is O(n2)