{
let value1: unknown = 1; // unknown 型なのでどんな値でも代入可能

// NG
let value2: number = value1; // unknown 型の変数を代入することはできない
// 型 'unknown' を型 'number' に割り当てることはできません。
}