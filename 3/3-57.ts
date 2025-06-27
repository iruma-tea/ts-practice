{
function addNumbers(a: number | string, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else {
        return a.toString() + b.toString();
    }
}

let result = addNumbers("1", "2");

// NG、string型のメソッド呼び出そうとするとエラー
result.includes("1");
// プロパティ 'includes' は型 'string | number' に存在ません。
//   プロパティ 'includes' は型 'number' に存在しません。
}