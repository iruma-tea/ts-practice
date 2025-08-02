"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = exports.PI = void 0;
exports.square = square;
var PI = 3.14;
exports.PI = PI;
function square(x) {
    return Math.pow(x, 2);
}
var Rectangle = /** @class */ (function () {
    function Rectangle(widht, height) {
        this.width = widht;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
