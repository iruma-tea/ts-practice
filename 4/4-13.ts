{
// 拡張元となるインタフェース
interface Vehicle {
    speed: number;
}

// CarはVehicleを拡張
interface Car extends Vehicle {
    engineType: string;
    volume: number;
}

// OK
const superCar: Car = {
    speed: 240,
    engineType: "V8",
    volume: 4000,
};

// NG、拡張元のVehicleに存在するspeedプロパティが欠けているためエラー
const sportsCar: Car = {
    engineType: "V4",
    volume: 3000,
};
// プロパティ 'speed' は型 '{ engineType: string; volume: number; }' にありませんが、型 'Car' では必須です。
}