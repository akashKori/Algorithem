let myString = "back-ground-color";

//  creating one camelcase function 


function camelCase(mystring) {
    
var mystrArr = mystring.split('-');
let newArr= mystrArr.map(function(item,index){
    if(index !==0){
        item = item.charAt(0).toUpperCase()+item.slice(1,item.length);        
    }
    return item;
});
    
return newArr;
}

let camelString= camelCase(myString);
console.log(camelString.join(''));