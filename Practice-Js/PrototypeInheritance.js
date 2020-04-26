// Factory pattern

let userFactory= function(name,age,gender){
    let temp={};
    temp.name= name;
    temp.age=age;
    temp.gender=gender;
    temp.showUserInfo= function(){
        console.log('name:  '+ temp.name + ' age:  '+temp.age +' gender:  ' + temp.gender );
    }
    return temp;
}

var u1= userFactory('akash','31','Male');
var u2= userFactory('rajesh','31','Male');

u1.showUserInfo();
u2.showUserInfo();


//Constructor Pattern

let EmployeeInfo = function(name,salary,designation){
    this.name= name;
    this.salary= salary;
    this.designation=designation;

    this.showEmployeeInfo= function(){
        console.log('name:  '+ this.name);
        console.log('salary:  '+ this.salary);
        console.log('designation:  '+ this.designation);
    }
}

var emp1 = new EmployeeInfo('akash', 5, 'software engineer');
var emp2 = new EmployeeInfo('shiva', 4, 'ui developer');

emp1.showEmployeeInfo();
emp2.showEmployeeInfo();

// ProtoType Pattern 

let clientProto = function(){};

clientProto.prototype.name= 'no name';
clientProto.prototype.contact = 'no contact';
clientProto.prototype.technology = 'no technology';
clientProto.prototype.showDetail = function(){
    console.log('name:  '+ this.name+ ' contact:  '+ this.contact+ ' technology: '+ this.technology);    
}

var client1 = new clientProto();
client1.name = 'theranos';
client1.contact = '140-989-0909';
client1.technology = 'React/ Redux';
client1.showDetail();


//Dynamic protoType Pattern 

let clientDynamicProto = function(name,contact,technology){
  this.name= name;
  this.contact= contact;
  this.technology= technology;
  if( typeof this.showDetail != 'function')
  {
     
    clientDynamicProto.prototype.showDetail = function(){
    console.log('name:  '+ this.name+ ' contact:  '+ this.contact+ ' technology: '+ this.technology);    
}
  }
};

var client2 = new clientDynamicProto('ram','120','rex');
client2.showDetail();
