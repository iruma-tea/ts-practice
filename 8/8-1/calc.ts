const PI = 3.14;

function square(x: number) {
  return x ** 2;
}

class Rectangle {
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

// 名前つきエクスポート
export { PI, square, Rectangle };
