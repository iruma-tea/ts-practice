// string型のnameプロパティを持つオブジェクト型を定義
type Name = {
    name: string;
};

// 変数johnにName型を指定
let john: Name;

// ケース1
const objA = { name: "John" };
john = objA;

// ケース2
const objB = {
    name: "John",
    gender: "male",
};
john = objB;

// ケース3
const objC = {
    // name プロパティが含まれない
    fullName: "John Doe",
    age: 25,
};

john = objC; // NG
// プロパティ 'name' は型 '{ fullName: string; age: number; }' にありませんが、型 'Name' では必須です。
