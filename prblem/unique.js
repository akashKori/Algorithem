

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

function unique(arr) {
 let tempArr= [];
    
    arr.forEach(function(item){
        if(!tempArr.includes(item))
            tempArr.push(item)
    })
    
return tempArr;
}

let result = unique(strings);

console.log(result);