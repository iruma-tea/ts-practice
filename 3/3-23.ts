{
type Person = {
    name: string;
    age: number;
};

// ok
const john: Person = {
    name: "John",
    age: 25,
};

const alice: Person = {
    name: "Alice",
    age: 30,
    gender: "female", // オブジェクト リテラルは既知のプロパティのみ指定できます。'gender' は型 'Person' に存在しません。
};
}