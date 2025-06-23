{
type Person = {
    name: string;
    age: number;
};

// あらかじめオブジェクトリテラルを生成して変数に代入
const alice = {
    name: "Alice",
    age: 30,
    gender: "female",
};

const aliceAsPerson: Person = alice; // OK
}