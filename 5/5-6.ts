{
// string型のnameプロパティを持つオブジェクト型を定義
type Name = {
    name: string;
};

// 変数johnにName型を指定
let john:Name;

// ケース1
const objA = { name: "John" };
john = objA; // OK. nameプロパティが存在するため

// ケース2
const objB = {
    name: "John",
    gender: "male", // name以外のプロパティ
};

john = objB; // OK. name以外のプロパティが含まれていたも代入可能。つまり、objBはName型の要素。

// ケース3
const objC = {
    // nameプロパティが含まれない
    fullName: "John Doe",
    age: 25,
};

john = objC; // NG.
// プロパティ 'name' は型 '{ fullName: string; age: number; }' にありませんが、型 'Name' では必須です。
}