let checkExp = function(){
    let sampleJson = '{ "age" }';
    try{
      let result= JSON.parse(sampleJson);
      console.log(result);
      if(!result){
          let newError = new SyntaxError('Can not parse Json file');
          throw newError;
      }
    }
    catch(err){
       console.log('error has occurred', err.name)
    }
}

checkExp();