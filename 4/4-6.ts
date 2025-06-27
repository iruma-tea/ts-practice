{
interface Point {
    readonly x: number;
    readonly y: number;
}

const point: Point = {
    x: 10,
    y: 20
};

// NG. xは読み取り専用なので再代入は許可されない
point.x = 30;
// 読み取り専用プロパティであるため、'x' に代入することはできません。
}