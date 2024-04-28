{
    class Person {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
    }

    // 変数johnの型はPerson
    const john = new Person("John Doe", 25);

    // NG
    john.gender = "male";
    // プロパティ 'gender' は型 'Person' に存在しません。
}