let personInfo= {
    name:'akash',
    age:'31',
    showInfo(){
        console.log('name : '+ this.name);
        console.log('age : '+ this.age);
    }
}

let personSalary={
    salary:300,
    showSalary(){
        console.log('salary is '+ this.salary);
    },
    __proto__: personInfo
}


// personInfo.__proto__= personSalary;

personInfo.showInfo();


let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3,
    __proto__: head
  };
  
  let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
  };
  
  let pockets = {
    money: 2000,
    __proto__: bed
  };