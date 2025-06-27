{
// 戻り値の型がvoidの関数型
type ReturnVoid = () => void;

// OK. 実際には string型の値を返す関数の代入
const greetWorld: ReturnVoid = () => {
    return "Hello, world!";
};

// resultの型はvoidとして、関数の戻り値は無視される。
const result = greetWorld(); // void型

// NG、TypeScriptはresultの型をvoidとみなしているため、string型のメソッドは使えない
console.log(result.toUpperCase()); // プロパティ 'toUpperCase' は型 'void' に存在しません。
}