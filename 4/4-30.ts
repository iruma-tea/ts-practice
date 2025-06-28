{
class SuperClass {
  prop: number = 10;
}

class SubClass extends SuperClass {
  prop: string = "20"; // SuperClassのプロパティをオーバーライド.
}
// 型 'SubClass' のプロパティ 'prop' を基本データ型 'SuperClass' の同じプロパティに割り当てることはできません。
//   型 'string' を型 'number' に割り当てることはできません。
}