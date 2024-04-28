{
    interface Shape {
        getArea(): number;
    }

    class Circle implements Shape {
        radius: number;

        constructor(radius: number) {
            this.radius = radius;
        }

        getArea(): number {
            return Math.PI * this.radius * this.radius;
        }
    }

    const circle = new Circle(5);
    console.log(circle.getArea());
}