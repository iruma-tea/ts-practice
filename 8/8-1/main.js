"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calc_js_1 = require("./calc.js"); // 拡張子に.jsを指定
console.log(calc_js_1.PI); // 3.14
var result = (0, calc_js_1.square)(3);
console.log(result); // 9
var rect = new calc_js_1.Rectangle(5, 10);
console.log(rect.getArea()); // 50
