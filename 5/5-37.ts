{
// 引数がstring型ならtrueを返す関数
function isString(value: unknown): boolean {
    return typeof value === 'string';
}

function printValue(inputVal: number | string) {
    if (isString(inputVal)) {
        // NG. inputValがstring型に絞り込めていない
        console.log(inputVal.toUpperCase());
        // プロパティ 'toUpperCase' は型 'string | number' に存在しません。
        // プロパティ 'toUpperCase' は型 'number' に存在しません。
    } else {
        // NG
        console.log(inputVal.toFixed(2));
        // プロパティ 'toFixed' は型 'string | number' に存在しません。
        // プロパティ 'toFixed' は型 'string' に存在しません。
    }
}
}