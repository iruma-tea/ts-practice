{
    interface Person {
        name: string;
        age: number;
    }

    let person: Person;

    // ケース1
    let john = {
        name: "John",
        age: 30,
        gender: "male"
    };

    // OK
    person = john;

    // ケース2
    let jane = {
        name: "Jane",
        age: "25",
    };

    // NG
    person = jane;
    // 型 '{ name: string; age: string; }' を型 'Person' に割り当てることはできません。
    // プロパティ 'age' の型に互換性がありません。
    // 型 'string' を型 'number' に割り当てることはできません。

    // ケース3
    let alice = {
        name: "Alice",
    };

    // NG
    person = alice;
    // プロパティ 'age' は型 '{ name: string; }' にありませんが、型 'Person' では必須です。
}