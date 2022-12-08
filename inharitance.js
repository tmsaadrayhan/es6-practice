class Parent {
    constructor() {
        this.fatherName = "Schwarznegger"
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name= name;
    }
    getName(){
        return this.name +" "+ this.fatherName;
    }
}
const baby= new Child("Arnold");
const baby2= new Child("Tom");
console.log(baby.getName());
console.log(baby2);