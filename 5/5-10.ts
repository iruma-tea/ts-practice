{
type Name = {
    name: string;
};

// Name型のサブタイプ
type NameAndAge = {
    name: string;
    age: number;
};

// nameだけを出力する関数
function logName(person: Name) {
    console.log(person.name);
}

// nameとageを出力する関数
function logNameAndAge(person: NameAndAge) {
    console.log(person.name, person.age);
}

const personOnlyName: Name = { name: "John" };
const personNameAndAge: NameAndAge = { name: "John", age: 20 };

// OK
logName(personNameAndAge); // Name型を要求する関数に、NameAndAge型を渡す。

// NG
logNameAndAge(personOnlyName); // NameAndAge型を要求する関数に、Name型を渡す。
// 型 'Name' の引数を型 'NameAndAge' のパラメーターに割り当てることはできません。
//   プロパティ 'age' は型 'Name' にありませんが、型 'NameAndAge' では必須です。
}