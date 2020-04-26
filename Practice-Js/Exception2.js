
let divide = function(){
  try{
    let numerator = 10;
    let denominator = 0;

    try{
    if(denominator===0){
       throw {
           name: 'Divide by zero error',
           message: 'can not divide by zero',
       }
     } else{
         let result = numerator/denominator;
         return result;
     }
    }
    catch(e){
        if(e.name==='Divide by zero error'){
            throw e;
        }
       console.log('error has occurred'+ e.name);
       console.log('description is '+ e.message);
    }
} catch(e){
  console.log('error has been caught in outer try');
}
}

divide();