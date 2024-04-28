{
    // 拡張元となるインタフェース
    interface Vehicle {
        speed: number;
    }

    interface Car extends Vehicle {
        enqineType: string;
        volume: number;
    }

    const superCar: Car = {
        speed: 240,
        enqineType: "V8",
        volume: 4000,
    };

    const sportsCar: Car = {
        enqineType: "V4",
        volume: 3000,
    }
    // プロパティ 'speed' は型 '{ enqineType: string; volume: number; }' にありませんが、型 'Car' では必須です。
}