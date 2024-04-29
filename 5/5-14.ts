{
    let fn1 = () => ({ name: "John" });

    let fn2 = () => ({ name: "John", age: 30 });

    // OK
    fn1 = fn2;

    // NG
    fn2 = fn1;
    // 型 '() => { name: string; }' を型 '() => { name: string; age: number; }' に割り当てることはできません。
    // プロパティ 'age' は型 '{ name: string; }' にありませんが、型 '{ name: string; age: number; }' では必須です。
}