{
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

// 変数 john の型は Person
const john = new Person("John Doe", 25);

// NG
john.gender = "male"; // Personクラスに存在しないプロパティにアクセスするとエラー
// プロパティ 'gender' は型 'Person' に存在しません。
}