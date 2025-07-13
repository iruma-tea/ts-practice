{
class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    // このメソッドに機能を追加する
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}
}