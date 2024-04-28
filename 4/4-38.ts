{
    class Circle {
        static PI: number = 3.14;
        radius: number;

        constructor(radius: number) {
            this.radius = radius;
        }

        getArea(): number {
            return Circle.PI * this.radius * this.radius;
        }
    }

    console.log(Circle.PI);

    const circleA: Circle = new Circle(5);
    console.log(circleA.getArea());

    const circleB: Circle = new Circle(10);
    console.log(circleB.getArea());
}