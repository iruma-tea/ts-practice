{
const person = {
    name: "John",
    age: 30,
    hobbies: ["tennis", "cooking"],
};

// 既存の変数から型を取得して、パラメータの型として指定
function greet(p: typeof person) {
  console.log(`My name is ${p.name}!`);
}

// パラメータ p の型
// {
//   name: string;
//   age: number;
//   hobbies: string[];
// }

// NG
greet({ name: "Alice", age: 22 });
// 型 '{ name: string; age: number; }' の引数を型 '{ name: string; age: number; hobbies: string[]; }' のパラメーターに割り当てることはできません。
// プロパティ 'hobbies' は型 '{ name: string; age: number; }' にありませんが、型 '{ name: string; age: number; hobbies: string[]; }' では必須です。
}