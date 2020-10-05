class Human{

    // constructor
    constructor(name){
        this.name = name;
    }
    say(){
        console.log("hello, my name is " + this.name + " .");
    }
}

const ken = new Human('ken');

ken.say(); // hello my name is ken.