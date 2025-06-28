{
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

// 型としてクラスを使用
let john: Person;
john = new Person("John Doe", 25);

// NG
john = "John Doe";
// 型 'string' を型 'Person' に割り当てることはできません。
}