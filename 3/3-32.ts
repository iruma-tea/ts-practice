{
let person:[string, number] = ["Alice", 30];

// NG
person = ["Alice", 30, 1993]; // 型 '[string, number, number]' を型 '[string, number]' に割り当てることはできません。
// ソースには 3 個の要素がありますが、ターゲットで使用できるのは 2 個のみです。
}