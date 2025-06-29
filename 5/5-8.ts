{
type Name = {
    name: string;
};

type Age = {
    age: number;
}

// インターセクション型
type NameAndAge = Name & Age;
// Name & Age

let alice: NameAndAge;
alice = { name: "Alice", age: 30 }; // OK.
alice = { name: "Alice" }; // NG.
// 型 '{ name: string; }' を型 'NameAndAge' に割り当てることはできません。
//   プロパティ 'age' は型 '{ name: string; }' にありませんが、型 'Age' では必須です。
}