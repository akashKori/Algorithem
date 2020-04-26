class Sample {
    constructor(name,age,property){
        this.name = name;
        this.age= age;
        this.property= property;
    }
    showDetail(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.property);
    }
}

class child extends Sample{
    constructor(name,age,property){
        super(name,age,property);        
    }
}

var ch1 = new child('akash','31',33);

ch1.showDetail();
