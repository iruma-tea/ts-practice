{
let x = Math.random() > 0.5 ? 1 : "Hello, TypeScript";
// string | number型

// NG. xの値がnumber型の可能性があるため
x.toUpperCase(); 
// プロパティ 'toUpperCase' は型 'string | number' に存在しません。
// プロパティ 'toUpperCase' は型 'number' に存在しません。

// 代入する値からxの型を絞り込む
x = "narrowing"; // string型

// OK. string型に絞り込まれたのでtoUpperCaseが使える
x.toUpperCase();

// 代入する値からxの型を絞り込む
x = 123;

// OK. number型に絞り込まれたのでtoFixedが使える
x.toFixed();

}