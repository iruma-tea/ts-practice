{
    class Person {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
        // このメソッドに機能を追加したい。
        greet() {
            console.log(`Hello, my name is ${this.name}.`);
        }
    }

    const person = new Person("John");

    person.greet();

    // NG.　コールバック関数として実行すると、undefined
    setTimeout(person.greet, 1000);

}