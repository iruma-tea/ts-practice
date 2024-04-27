{
    interface Point {
        readonly x: number;
        readonly y: number;
    }

    const point: Point = { x: 10, y: 10 };

    // NG.
    point.x = 30;
    // 読み取り専用プロパティであるため、'x' に代入することはできません。
}