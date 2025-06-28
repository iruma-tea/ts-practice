{
interface Shape {
    getArea(): number;
}

class Circle implements Shape {
    radius: number;

    constructor(radius: number) {
        this.radius = radius
    }
}
// クラス 'Circle' はインターフェイス 'Shape' を正しく実装していません。
//   プロパティ 'getArea' は型 'Circle' にありませんが、型 'Shape' では必須です。
}