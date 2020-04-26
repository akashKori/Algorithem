let userInfo={
    firstName:'',
    lastName:'',
   get fullName(){
       return(this.firstName+' '+ this.lastName)
   },
   set fullName(param){       
       [this.firstName,this.lastName]= param.split(' ');
   },
};

userInfo.fullName= 'akash kori';

console.log(userInfo.fullName);