{
    class Person {
        readonly name: string;
        age: number;
        hobbies?: string[];

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        greeting(greeting: string): void {
            console.log(`${greeting}, my name is ${this.name} and I'm ${this.age} years old.`);
        }
    }
}