{
class Parent {
    constructor(name: string) {
        console.log(`Parnet: ${name}`);
    }
}

class Child extends Parent {
    constructor(name: string, age: number) {
        super(name);
        console.log(`Child: name => ${name}, age => ${age}`);
    }
}
const child = new Child("Child", 10);
//  Parnet: Child
//  Child: name => Child, age => 10
}

