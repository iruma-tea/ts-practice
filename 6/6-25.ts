{
// 色名を抜き出して新たにユニオン型を定義
type primaryColor = 'red' | 'green' | 'blue';
type RGB = [red: number, green: number, blue: number]

// Recordによる定義
let color: Record<primaryColor, RGB | string>;
}