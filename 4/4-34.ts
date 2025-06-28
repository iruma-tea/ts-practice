{
class Person {
    name: string;
    private password: string;

    constructor(name: string, password: string) {
        this.name = name;
        this.password = password;
    }

    public revealPassword() {
        // OK. クラスの内部からはアクセスが可能
        console.log(`${this.name}'s password is: ${this.password}`);
    }
}

const jane = new Person("Jane", "12345");

// NG.クラスの外部からはアクセスできない。
// console.log(jane.password);
// プロパティ 'password' はプライベートで、クラス 'Person' 内でのみアクセスできます。

jane.revealPassword(); // Jane's password is: 12345
}