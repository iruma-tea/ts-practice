// 型としてエクスポートされたクラスをtypeをつけずにインポート
import { PI, square, Reactangle, type Point, type LengthUnit } from "./calc";

// NG. 値としての利用は許可されない
const rect = new Reactangle(5, 10);
// 'export type' を使用してエクスポートされたため、'Reactangle' は値として使用できません。

// OK. 型としては利用は許される。
const rect1: Reactangle = {
  width: 3,
  height: 6,
  getArea() {
    return this.width * this.height;
  },
};
