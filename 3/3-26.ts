{
type ImutablePerson = {
    readonly name: string;
    age: number;
};

const alice: ImutablePerson = {
    name: "Alice",
    age: 30,
};

// ok、値の変更が可能
alice.age = 31;

// NG、読み取り専用プロパティ値の変更は許可されない
alice.name = "Jane"; // 読み取り専用プロパティであるため、'name' に代入することはできません。
}