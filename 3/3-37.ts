{
type Engine = {
    engineType: string;
    volume: number;
};

type Wheels = {
    wheelCount: number;
};

type Car = Engine & Wheels;

const myCar: Car = {
    engineType: "V8",
    volume: 3000,
    wheelCount: 4,
};
}