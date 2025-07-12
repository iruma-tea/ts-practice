{
type RGB = [red: number, green: number, blue: number]; // ラベル付きTuple型

interface Color {
    red: RGB | string;
    green: RGB | string;
    blue: RGB | string;
}

// Colorで型注釈
const color: Color = {
    red: [255, 0, 0],
    green: "#00ff00", // string型 | RGB
    blue: [0, 0, 255],
}

// NG
const greenNormalized = color.green.toUpperCase(); // string型とRGB型が混在しているため、stringメソッドは使えない
// プロパティ 'toUpperCase' は型 'string | RGB' に存在しません。
//   プロパティ 'toUpperCase' は型 'RGB' に存在しません。
}