{
    class Person {
        constructor(
            public name: string,
            protected age: number,
            private address: string,
        ) { }
        introduce() {
            console.log(
                `I'm ${this.name} and ${this.age} years old. I live at ${this.address}`
            );
        }
    }
}