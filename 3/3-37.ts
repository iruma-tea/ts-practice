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
        engineType: "VS",
        volume: 3000,
        wheelCount: 4,
    }

    console.log(myCar.wheelCount);
}