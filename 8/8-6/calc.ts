const PI = 3.14;

function square(x: number) {
  return x ** 2;
}

class Reactangle {
  width: number;
  height: number;
  constructor(widht: number, height: number) {
    this.width = widht;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

interface Point {
  x: number;
  y: number;
}

type LengthUnit = "m" | "cm" | "mm";

// Rectangleの前にTypeを記述してエクスポート
export { PI, square, type Reactangle, type Point, type LengthUnit };
