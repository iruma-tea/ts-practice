{
    class Person {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        greet(greeting: string): void {
            console.log(`${greeting}, my name is ${this.name} and I'm ${this.age} years old.`);
        }

    }

    const john = new Person("John Doe", 25);
    john.greet("Hello");

    john.greet();
    // 1 個の引数が必要ですが、0 個指定されました。

    john.greet(["Hello"]);
    // 型 'string[]' の引数を型 'string' のパラメーターに割り当てることはできません。
}