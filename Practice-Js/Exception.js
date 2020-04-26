function something(number){
    setTimeout(
        function(){
      try{
         let user={key:10};
         let nameError = new SyntaxError('oops... name is not a property');
         if(!user.name){
             throw(nameError);
         }
      }
      catch(err){

          
   console.log('error has occurred'+err.name);
   console.log('error has occurred'+err.message);
   console.log('error has occurred'+err.stack
);
      }
    },100
    );
}

something(100);