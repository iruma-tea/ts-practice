{
function getLastItem<T>(array: T[]): T {
    return array[array.length - 1];
}

const numbers = [1, 2, 3, 4, 5]; // number[]型

// 型引数を明示的にnumber型に指定
let lastNumber = getLastItem<Number>(numbers);

// NG.
let lastString = getLastItem<string>(numbers);
// 型 'number[]' の引数を型 'string[]' のパラメーターに割り当てることはできません。
// 型 'number' を型 'string' に割り当てることはできません。
}