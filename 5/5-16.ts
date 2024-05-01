{
    interface Person {
        name: string;
        age: number;
    }

    interface Student extends Person {
        club: string;
    }

    let fn3 = (person: Person) => {
        console.log(`That person's name is ${person.name} (${person.age}).`);
    };

    let fn4 = (student: Student) => {
        console.log(`That student's name is ${student.name} (${student.age}) and enjoys ${student.club}`);
    };

    // NG
    fn3 = fn4;
    //  '(student: Student) => void' を型 '(person: Person) => void' に割り当てることはできません。
    // パラメーター 'student' および 'person' は型に互換性がありません。
    // プロパティ 'club' は型 'Person' にありませんが、型 'Student' では必須です。

    // OK
    fn4 = fn3;

    // fn4のパラメータの型はStudent型のため、Student型のオブジェクトを渡す必要がある。
    fn4({ name: "John", age: 30, club: "tennis" });
    // ログ：That person's name is John (30).

}