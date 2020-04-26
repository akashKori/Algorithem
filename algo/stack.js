let Stack = function(){
    this.storage=[];
    this.count= 0;

    this.push = function(a){
     this.count++;
     this.storage[this.count-1]=a;
    }

    this.pop= function(){
        if(this.count ===0){
            return undefined;
        }
        this.count--;
        delete this.storage[this.count];
        return this.storage;
    }

    this.size= function(){
        return this.count;
    }
    this.tos= function(){
        return this.storage[this.count-1];
    }
}


let myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);

myStack.pop();
//myStack.pop();



console.log(myStack.storage);
console.log(myStack.tos());
console.log(myStack.count);
