{
interface Car {
    engineType: string;
    volume: number;
}

// 2箇所で宣言したCarインターフェイスは自動的にマージされる
interface Car {
    color: string;
}

// OK. 過剰プロパティチェックが働くがエラーにはならない。Carインターフェイスがマージされていることがわかる
const myCar: Car = {
    engineType: "V6",
    volume: 3000,
    color: "red",
};

// NG. colorプロパティが欠けているためエラーになる。Carインターフェイスがマージされていることがわかる
const herCar: Car = {
  engineType: "V8",
  volume: 4000,
};
// プロパティ 'color' は型 '{ engineType: string; volume: number; }' にありませんが、型 'Car' では必須です。
}