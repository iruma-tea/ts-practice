{
function fn1() {
    let x; // any型
    x = 123;
    x = "abc";
    return x;
}

let x = fn1(); // string型
x = 1; // NG
// 型 'number' を型 'string' に割り当てることはできません。

function fn2() {
    let list = []; // any[]型
    list.push(1);
    list.push("Jane");
    return list;
}

const list = fn2(); // (string | number)[]型
list.push(true); // NG
// 型 'boolean' の引数を型 'string | number' のパラメーターに割り当てることはできません。

}