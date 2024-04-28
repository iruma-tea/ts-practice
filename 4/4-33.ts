{
    class Person {
        public name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        public greet() {
            console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
        }
    }

    const john = new Person("John", 25);
    console.log(john.name);
    console.log(john.age);
    john.greet();
}