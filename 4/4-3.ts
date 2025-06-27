{
interface Person {
    name: string;
    age: number;
}

// 変数 john に Person インタフェースを指定
let john: Person = {
    name: "John",
    age: 30,
};

// NG
john = "John";
// 型 'string' を型 'Person' に割り当てることはできません。

// NG
john = {
    name: "John",
    age: "30",
    // 型 'string' を型 'number' に割り当てることはできません。
}

}