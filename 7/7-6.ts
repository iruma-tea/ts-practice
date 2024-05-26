{
    class Person {
        name: string;
        constructor(name: string) {
            this.name = name;
        }

        // このメソッドに機能を追加したい
        greet() {
            console.log(`Hello, ,my name is ${this.name}`);
        }
    }

    const person = new Person("John");

    // OK. オブジェクトのメソッドとして実行。thisはPersonオブジェクトに束縛される。
    person.greet();

    // NG。コールバック関数として実行するとundefined
    setTimeout(person.greet, 1000);
}