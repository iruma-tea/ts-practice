{
    class Circle {
        private _radius: number;

        constructor(radius: number) {
            this._radius = radius;
        }

        // ゲッターの定義
        get radius(): number {
            return this._radius;
        }

        // セッターの定義
        set radius(value: number) {
            if (value <= 0) {
                throw new Error("不正な値です。0より大きい値を入力してください。");
            }
            console.log("半径に設定");
            this._radius = value;
        }
    }

    const circle = new Circle(3);
    console.log(circle.radius);

    circle.radius = 5;

    circle.radius = -1; // エラー
}