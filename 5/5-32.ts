{
interface Rectangle {
    type: "rectangle"; // タグ(識別子)
    width: number;
    height: number;
}
interface Circle {
    type: "circle"; // タグ(識別子)
    radius: number;
}
interface Square {
    type: "square"; // タグ(識別子)
    width: number;
}

// ユニオン型の定義
type Shape = Rectangle | Circle | Square;

function printArea(shape: Shape) {
    switch(shape.type) {
        case "rectangle":
            console.log(`Area: ${shape.width * shape.height}`);
            break;
        case "circle":
            console.log(`Area: ${shape.radius ** 2 * Math.PI}`);
            break;
        case "square":
            console.log(`Area: ${shape.width ** 2}`);
            break;
    }
}
}