class ValidationError extends Error {
    constructor(err){
        super(err);
        this.name= err.name;
        this.message= 'this is customized error';
        this.stack= err.stack;
    }
}

function parseJson(){
  let tempJson = '{ "age": 25 }';
  try{
    console.log('hitting here');
      let result = JSON.parse(tempJson);
      if(!result.name){          
          throw  new ValidationError('age is not exist');
      }
  } catch(err){
      console.log('unexpected error');
      if(err instanceof ValidationError){
        console.log('error is '+ err.name);
        console.log('error is '+ err.message);
      }
  }

}

parseJson();