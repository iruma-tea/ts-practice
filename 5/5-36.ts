{
type RGB = [red: number, green: number, blue: number]; // ラベル付きTuple型

interface Color {
    red: RGB | string;
    green: RGB | string;
    blue: RGB | string;
}

// Colorで型注釈
const color = {
    red: [255, 0, 0],
    green: "#00ff00", // string型 | RGB
    blue: [0, 0, 255],
} satisfies Color; // satisfies演算子を使用して、coolorがColor型に適合することを確認

// const color: {
//     red: [number, number, number];
//     green: string;
//     blue: [number, number, number];
// }

// OK
const greenNormalized = color.green.toUpperCase(); // string型のメソッドを使用できる

// NG
const typoColor = {
  red: [255, 0, 0],
  green: "#00ff00",
  bleu: [0, 0, 255], // Error
} satisfies Color;

// >> Object literal may only specify known properties, and 'bleu' does not exist in type 'Color'.

}