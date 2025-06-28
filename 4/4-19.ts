{
class Person {
    name: string;
    age: number;
    // プロパティ 'age' に初期化子がなく、コンストラクターで明確に割り当てられていません。

    constructor(name:string, age: number) {
        this.name = name;
    }
}
}