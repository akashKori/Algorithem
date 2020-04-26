let user = {
  name: "John"
};

Object.defineProperty(user, "name", {
  writable: false
});

user.name = "Pete"; // Error: Cannot assign to read only property 'name'...

Object.defineProperty(user,'name',{
    writable:true
});

user.name= 'akash';

console.log(user.name);