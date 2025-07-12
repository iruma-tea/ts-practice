{
interface Rectangle {
    width: number;
    height: number;
}
interface Circle {
    radius: number;
}

// 新たにSquare型を追加
interface Square {
    width: number;
}

// 型エイリアスでユニオン型を定義
type Shape = Rectangle | Circle | Square;

function printArea(shape: Shape) {
    if ("width" in shape) {
        // shapeはRectangle | Square型として扱われる。
        console.log(`Area: ${shape.width * shape.height}`);
        // プロパティ 'height' は型 'Rectangle | Square' に存在しません。
        //   プロパティ 'height' は型 'Square' に存在しません。
    }
    // 以下、省略
}
}